import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState({
    menuCategory: true,
    // media: true,
    // theme: true,
    // page: true,
    // user: true,
    // setting: true,
  });

  const toggleCollapse = (dropdown) => {
    setCollapsed((prevState) => {
      const updatedCollapsed = {};
      // Close all collapses except the one being toggled
      Object.keys(prevState).forEach((key) => {
        updatedCollapsed[key] = key === dropdown ? !prevState[key] : true;
      });
      return updatedCollapsed;
    });
  };

  return (
    <div>
      <div className="">
        <ul className="flex gap-2 flex-col p-4">
          <li className="bg-green-600 text-white py-2 px-4 cursor-pointer hover:bg-green-500 duration-300">
            <Link className="flex gap-2 items-center">
              <MdDashboardCustomize />
              Dashboard
            </Link>
          </li>

          <li className="bg-green-600 text-white py-2 px-4">
            <div onClick={() => toggleCollapse("menuCategory")}>
              Menu Category
            </div>
            <ul
              className={`pl-7 mt-2 ${
                collapsed.menuCategory
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <li>
                <Link>Add Category</Link>
              </li>
              <li>
                <Link>Add Category</Link>
              </li>
            </ul>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
