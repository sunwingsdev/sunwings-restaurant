import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdOutlineRestaurantMenu,
  MdOutlineSettings,
  MdOutlinePowerSettingsNew,
  MdPayments,
  MdHistory,
} from "react-icons/md";
import { AiOutlineStock, AiOutlineBranches } from "react-icons/ai";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState({
    menuCategory: true,
    branch: true,
    saleHistory: true,
    stockManager: true,
    paymentGateway: true,
    setting: true,
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
        <div className="p-4 text-center">
          <h2 className="text-4xl font-black text-white shadow-2xl cursor-pointer">
            <span className="text-[#f40027]">K</span>FC
          </h2>
        </div>
        <ul className="flex gap-2 flex-col p-4 text text-base">
          <li className="bg-[#f40027] text-white py-2 px-4 cursor-pointer hover:bg-[#bd001e] duration-300 lg:text-lg">
            <Link className="flex gap-2 items-center">
              <MdDashboardCustomize />
              Dashboard
            </Link>
          </li>

          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
              onClick={() => toggleCollapse("menuCategory")}
            >
              <MdOutlineRestaurantMenu />
              Menu Category
            </div>
            <ul
              className={`pl-4 mt-2 text-sm lg:text-base ${
                collapsed.menuCategory
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link to="/dashboard/add-category">Add Category</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>All Category</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link to="/dashboard/add-item">Add Item</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4">
                <Link>All Items</Link>
              </li>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
              onClick={() => toggleCollapse("branch")}
            >
              <AiOutlineBranches />
              Branch
            </div>
            <ul
              className={`pl-4 mt-2 text-sm lg:text-base ${
                collapsed.branch
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Add New Branch</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>All Branch</Link>
              </li>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
              onClick={() => toggleCollapse("saleHistory")}
            >
              <MdHistory />
              Sale History
            </div>
            <ul
              className={`pl-4 mt-2 text-sm lg:text-base ${
                collapsed.saleHistory
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Online History</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>All History</Link>
              </li>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
              onClick={() => toggleCollapse("stockManager")}
            >
              <AiOutlineStock />
              Stock Manager
            </div>
            <ul
              className={`pl-4 mt-2 text-sm lg:text-base ${
                collapsed.stockManager
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Add Stock Maneger</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>All Stock Maneger</Link>
              </li>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
              onClick={() => toggleCollapse("paymentGateway")}
            >
              <MdPayments />
              Payment Gateway
            </div>
            <ul
              className={`pl-4 mt-2 text-sm lg:text-base ${
                collapsed.paymentGateway
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Add Gateway</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>All Gateway</Link>
              </li>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
              onClick={() => toggleCollapse("setting")}
            >
              <MdOutlineSettings />
              Setting
            </div>
            <ul
              className={`pl-4 mt-2 text-sm lg:text-base ${
                collapsed.setting
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>SMS</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>E-Mail</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Logo & Icon</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Style % Color</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Api</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Upgrade Version</Link>
              </li>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Support & Help</Link>
              </li>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div className="bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg">
              <MdOutlinePowerSettingsNew />
              Exit & Logout
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
