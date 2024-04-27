import { DataGrid } from "@mui/x-data-grid";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { IconButton } from "@mui/material";
import {
  useDeletePaymentMutation,
  useGetAllPaymentsQuery,
} from "../../../redux/features/allApis/paymentApi/paymentApi";
import moment from "moment";
import { useState } from "react";
import Modal from "../../../components/shared/Modal";
import { useToasts } from "react-toast-notifications";

const AllHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowId, setRowId] = useState("");
  const { data: payments } = useGetAllPaymentsQuery();
  const [deletePayment] = useDeletePaymentMutation();
  const { addToast } = useToasts();

  const handleOpenDeleteModal = (id) => {
    setRowId(id);
    setIsOpen(true);
  };

  //   close the delete modal
  const handleCloseDeleteModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      const result = await deletePayment(rowId);
      if (result.data.deletedCount > 0) {
        addToast("Item Deleted successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        handleCloseDeleteModal();
      }
    } catch (error) {
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  // Check if cashPayments is undefined before rendering DataGrid
  if (!payments) {
    return <div>Loading...</div>;
  }

  // Columns configuration
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 120 },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      renderCell: (params) => (
        <div className="">
          {moment(params?.row.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      ),
    },
    { field: "paymentMethod", headerName: "Payment Method", width: 150 },
    { field: "paid", headerName: "Paid", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <div className="flex flex-row items-center justify-center gap-2">
          <IconButton
            aria-label="delete"
            // Handle delete action
            onClick={() => handleOpenDeleteModal(params.row._id)}
          >
            <RiDeleteBack2Fill />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <>
      {" "}
      <div className="w-2/3 mx-auto">
        <DataGrid
          rows={payments}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5, 10, 20, 100]} // Add pageSizeOptions including 100
          getRowId={(row) => row._id}
        />
      </div>
      <Modal isOpen={isOpen} closeModal={handleCloseDeleteModal}>
        <div className="">
          <h2 className="text-center pb-6 pt-4 text-xl">
            Are you sure want to delete it?
          </h2>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <button
              onClick={handleCloseDeleteModal}
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

export default AllHistory;
