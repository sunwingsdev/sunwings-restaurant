import { useState } from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../api/api";
import { useAddItemMutation } from "../../../redux/features/allApis/itemApi/itemApi";
import { useToasts } from "react-toast-notifications";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [addItem] = useAddItemMutation();
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  //   console.log(image);

  const onSubmit = (data) => {
    // Handle form submission logic here
    setLoading(true);
  imageUpload(image)
      .then((imageData) => {
        // console.log(imageData);
        const imageUrl = imageData?.data?.display_url;
        data.itemImage = imageUrl;
        addItem(data)
          .then((result) => {
            if (result.data.insertedId) {
              setLoading(false);
              addToast("Added item Successfully", {
                appearance: "success",
                autoDismiss: true,
              });
            }
          })
          .catch(() => {
            setLoading(false);
            addToast("Failed to Add item", {
              appearance: "error",
              autoDismiss: true,
            });
          });
      })
      .catch((error) => console.log(error));
    // Reset form after submission
    reset();
    // Clear image preview
    setImagePreview(null);
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
            {...register("stock")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className={`bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 `}
          >
            {loading ? "Adding" : "Add Item"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
