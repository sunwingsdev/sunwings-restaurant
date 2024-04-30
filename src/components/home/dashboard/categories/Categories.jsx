import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { FaDeleteLeft } from "react-icons/fa6";
import { useToasts } from "react-toast-notifications";
import {
  useDeleteMainCategoryMutation,
  useGetMainCategoriesQuery,
} from "../../../../redux/features/allApis/mainCategoryApi/mainCategoryApi";
import { useState } from "react";
import Modal from "../../../shared/Modal";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowId, setRowId] = useState("");
  const { data: rows, isLoading } = useGetMainCategoriesQuery();
  const [deleteMainCategory] = useDeleteMainCategoryMutation();
  const { addToast } = useToasts();

  const openModal = (id) => {
    setIsOpen(true);
    setRowId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async (id) => {
    // Delete functionality
    try {
      const result = await deleteMainCategory(id);
      console.log(result);
      if (result.data.deletedCount > 0) {
        addToast("Main category deleted successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        closeModal();
      }
    } catch (error) {
      addToast("Failed to delete main category", {
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

    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          onClick={() => openModal(params.row._id)}
        >
          <FaDeleteLeft className="hover:text-red-600" />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      {" "}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rowsWithId}
          columns={columns}
          loading={isLoading}
          pageSize={5}
        />
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <div className="">
          <h2 className="text-center pb-6 pt-4 text-xl">
            Are you sure want to delete it?
          </h2>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <button
              onClick={closeModal}
              className="btn btn-error text-white text-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(rowId)}
              className="btn btn-success text-white text-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Categories;
