import { useState } from "react";
import { useAddCategoryMutation } from "../../../redux/features/allApis/categoryApi/categoryApi";
import { useToasts } from "react-toast-notifications";
import SubCategories from "../../../components/home/dashboard/subcategories/SubCategories";
import { useGetMainCategoriesQuery } from "../../../redux/features/allApis/mainCategoryApi/mainCategoryApi";

const AddSubcategory = () => {
  const { data: categories } = useGetMainCategoriesQuery();
  const [subcategory, setSubcategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("pizza"); // Default selected category
  const [addCategory] = useAddCategoryMutation();
  const { addToast } = useToasts();

  const handleSubcategoryChange = (event) => {
    const inputValue = event.target.value;

    // Check if the input value contains any spaces
    if (inputValue.includes(" ")) {
      // If it contains spaces, do not update the state
      addToast("Do not use any space", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    // Update the state only if there are no spaces in the input value
    setSubcategory(inputValue);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle submitting the form, you can send the subcategory and selectedCategory to your backend here
    const categoryInfo = { category: selectedCategory, subcategory };
    try {
      const result = await addCategory(categoryInfo);
      if (result.data.insertedId) {
        addToast("Added subcategory Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      }
      setSubcategory("");
    } catch (error) {
      addToast("Failed to add", { appearance: "error", autoDismiss: true });
    }
    // Reset the subcategory input after submission
    setSubcategory("");
    setSelectedCategory("chicken");
  };

  return (
    <div className="flex flex-row justify-between items-start gap-8 w-4/5 mx-auto">
      <div className="flex flex-col p-4 bg-white rounded shadow-md w-1/3">
        <label className="text-lg font-bold mb-2">Add new subcategory</label>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="input input-bordered capitalize"
            >
              {categories?.map(({ _id, category }) => (
                <option key={_id} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1">Subcategory</label>
            <input
              type="text"
              value={subcategory}
              onChange={handleSubcategoryChange}
              placeholder="Enter subcategory"
              className="input input-bordered"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Add Subcategory
          </button>
        </form>
      </div>
      <SubCategories />
    </div>
  );
};

export default AddSubcategory;
