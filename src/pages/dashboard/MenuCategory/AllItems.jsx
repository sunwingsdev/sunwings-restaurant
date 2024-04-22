import { DataGrid } from "@mui/x-data-grid";
import {
  useDeleteItemMutation,
  useGetItemsQuery,
} from "../../../redux/features/allApis/itemApi/itemApi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { IconButton } from "@mui/material"; // Import IconButton for the delete button
import { useState } from "react";
import Modal from "../../../components/shared/Modal";
import { useToasts } from "react-toast-notifications";

const AllItems = () => {
  const { data: menuItems, isLoading } = useGetItemsQuery();
  const [deleteItem] = useDeleteItemMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [rowId, setRowId] = useState("");
  const { addToast } = useToasts();

  const openModal = (id) => {
    setIsOpen(true);
    setRowId(id);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async (itemId) => {
    try {
      const result = await deleteItem(itemId);
      if (result.data.deletedCount > 0) {
        addToast("Item Deleted successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        closeModal();
      }
    } catch (error) {
      addToast("Failed to delete item", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };

  const columns = [
    {
      field: "itemImage",
      headerName: "",
      width: 130,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Item Image"
          style={{ width: "100%", height: "100%", objectFit: "contain" }} // Adjust to fit width and height
        />
      ),
    },
    { field: "name", headerName: "Name", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "subCategory", headerName: "Subcategory", width: 130 },
    {
      field: "discount",
      headerName: "Discount",
      type: "number",
      width: 90,
    },
    {
      field: "delete",
      headerName: "",
      width: 90,
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          onClick={() => openModal(params.row._id)} // Assuming _id is the unique identifier
          sx={{ "&:hover": { backgroundColor: "#f44336", color: "#fff" } }} // Add hover effect
        >
          <RiDeleteBack2Fill />
        </IconButton>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-4/5 mx-auto">
        <DataGrid
          rows={menuItems}
          columns={columns}
          getRowId={(row) => row._id} // Assuming _id is the unique identifier
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      <button onClick={() => setIsOpen(true)} className="btn btn-success">
        open modal
      </button>

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

export default AllItems;
