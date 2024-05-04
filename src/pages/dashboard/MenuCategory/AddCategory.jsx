import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import Categories from "../../../components/home/dashboard/categories/Categories";
import { useAddMainCategoryMutation } from "../../../redux/features/allApis/mainCategoryApi/mainCategoryApi";

const AddCategory = () => {
  const [category, setCategory] = useState(""); // Default selected category
  const [addMainCategory] = useAddMainCategoryMutation();
  const { addToast } = useToasts();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle submitting the form, you can send the subcategory and selectedCategory to your backend here
    const categoryInfo = { category: category.toLowerCase() };
    try {
      const result = await addMainCategory(categoryInfo);
      if (result.data.insertedId) {
        addToast("Added category successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      }
      setCategory("");
    } catch (error) {
      addToast("Failed to add", { appearance: "error", autoDismiss: true });
    }
    // Reset the subcategory input after submission
    setCategory("");
  };

  return (
    <div className="flex flex-row justify-between items-start gap-8 w-4/5 mx-auto">
      <div className="flex flex-col p-4 bg-white rounded shadow-md w-1/3">
        <label className="text-lg font-bold mb-2">Add new category</label>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={handleCategoryChange}
              placeholder="Enter category"
              className="input input-bordered"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Add Category
          </button>
        </form>
      </div>
      <Categories />
    </div>
  );
};

export default AddCategory;
