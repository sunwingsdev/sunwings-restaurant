import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useEditItemMutation,
  useGetSingleItemQuery,
} from "../../../redux/features/allApis/itemApi/itemApi";
import { imageUpload } from "../../../api/api";
import { useToasts } from "react-toast-notifications";

const EditItem = ({ closeModal, rowId }) => {
  const [editItem] = useEditItemMutation();
  const { data: singleItem, isLoading, refetch } = useGetSingleItemQuery(rowId);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();
  const { addToast } = useToasts();

  const onSubmit = async (data) => {
    try {
      const imageData = await imageUpload(image);
      const imageUrl = imageData?.data?.display_url;
      data.itemImage = imageUrl;
      const itemData = { data, id: rowId };
      setLoading(true);
      const result = await editItem(itemData);
      //   console.log(result);
      if (result.data.modifiedCount > 0) {
        setLoading(false);
        addToast("Item edited Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        refetch();
        closeModal();
      } else {
        setLoading(false);
        addToast("Failed to edit item", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Ensure rowId is defined before using it
  if (!rowId) {
    return <div>No item selected for editing.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={singleItem?.name}
            {...register("name")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="details"
            className="block text-sm font-medium text-gray-700"
          >
            Details
          </label>
          <textarea
            id="details"
            defaultValue={singleItem?.details}
            {...register("details")}
            rows={3}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            defaultValue={singleItem?.price}
            {...register("price")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-700"
          >
            Discount
          </label>
          <input
            type="text"
            id="discount"
            defaultValue={singleItem?.discount}
            {...register("discount")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="itemImage"
            className="block text-sm font-medium text-gray-700"
          >
            Item Image
          </label>
          <div className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md">
            <label
              htmlFor="itemImage"
              className="cursor-pointer w-full border-gray-600 border-2 border-dashed rounded-lg"
            >
              <div className="flex flex-col items-center justify-center px-4 py-6">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-md"
                  />
                ) : (
                  <>
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 11v5.7a1 1 0 0 0 .3.7l4 4a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0 .3-.7V11m-6 4V3"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-600">Select a file</span>
                  </>
                )}
                <input
                  type="file"
                  id="itemImage"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            defaultValue={singleItem?.category}
            {...register("category")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Sub-Category
          </label>
          <input
            type="text"
            id="subCategory"
            defaultValue={singleItem?.subCategory}
            {...register("subCategory")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            type="text"
            id="stock"
            defaultValue={singleItem?.stock}
            {...register("stock")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className={`bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 `}
          >
            {loading ? "Editing item" : "Edit item"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
