import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { FaDeleteLeft } from "react-icons/fa6";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "../../../../redux/features/allApis/categoryApi/categoryApi";
import { useToasts } from "react-toast-notifications";

const SubCategories = () => {
  const { data: rows, isLoading } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { addToast } = useToasts();

  const handleDelete = async (id) => {
    // Delete functionality
    try {
      const result = await deleteCategory(id);
      console.log(result);
      if (result.data.deletedCount > 0) {
        addToast("Category Deleted successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      }
    } catch (error) {
      addToast("Failed to delete category", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };

  // Add id property to each row using the _id field
  const rowsWithId = rows
    ? rows.map((row, index) => ({ ...row, id: index + 1 }))
    : [];

  const columns = [
    { field: "id", headerName: "Serial No", width: 70 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "subcategory", headerName: "Subcategory", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          onClick={() => handleDelete(params.row._id)}
        >
          <FaDeleteLeft className="hover:text-red-600" />
        </IconButton>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsWithId}
        columns={columns}
        loading={isLoading}
        pageSize={5}
      />
    </div>
  );
};

export default SubCategories;
