import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
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
            Menu Category
            <ul>
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
