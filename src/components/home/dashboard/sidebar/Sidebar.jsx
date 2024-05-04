import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdOutlineRestaurantMenu,
  MdOutlineSettings,
  MdOutlinePowerSettingsNew,
  MdPayments,
  MdHistory,
} from "react-icons/md";
import { AiOutlineStock, AiOutlineBranches } from "react-icons/ai";
import { useToasts } from "react-toast-notifications";
import { AuthContext } from "../../../../providers/AuthProviders";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState({
    menuCategory: true,
    branch: true,
    saleHistory: true,
    stockManager: true,
    paymentGateway: true,
    setting: true,
  });
  const navigate = useNavigate();
  const { logOut, user, setLoading } = useContext(AuthContext);
  const { addToast } = useToasts();
  // handle log out here
  const handleLogout = () => {
    if (!user) {
      addToast("No user to be logout", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
    }

    logOut()
      .then(() => {
        addToast("User logged out successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      });
    setLoading(false);
  };

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
        <Link to="/">
          <div className="p-4 text-center">
            <h2 className="text-4xl font-black text-white shadow-2xl cursor-pointer">
              <span className="text-[#f40027]">K</span>FC
            </h2>
          </div>
        </Link>
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
              <Link to="/dashboard/add-category">
                <li className="bg-green-500 hover:bg-green-600 mb-2 py-2 px-4 w-full">
                  Add Category
                </li>
              </Link>
              <Link to="/dashboard/add-subcategory">
                <li className="bg-green-500 hover:bg-green-600 mb-2 py-2 px-4 w-full">
                  Add Subcategory
                </li>
              </Link>
              <Link to="/dashboard/add-item">
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2 w-full">
                  Add Item
                </li>
              </Link>
              <Link to={"/dashboard/all-items"}>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 w-full">
                  All Items
                </li>
              </Link>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700 duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
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
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  Add New Branch
                </li>
              </Link>
              <Link to={"/dashboard/all-branches"}>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  All Branches
                </li>
              </Link>
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
              <Link to="/dashboard/online-history" className="">
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  Online History
                </li>
              </Link>
              <Link to="/dashboard/all-history">
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  All History
                </li>
              </Link>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700 duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
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
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  Add Stock Manager
                </li>
              </Link>
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  All Stock Manager
                </li>
              </Link>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700 duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
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
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  Add Gateway
                </li>
              </Link>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>All Gateway</Link>
              </li>
            </ul>
          </li>
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700 duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
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
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  SMS
                </li>
              </Link>
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  E-Mail
                </li>
              </Link>
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  Logo & Icon
                </li>
              </Link>
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  Style % Color
                </li>
              </Link>
              <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                <Link>Api</Link>
              </li>
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  Upgrade Version
                </li>
              </Link>
              <Link>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2">
                  Support & Help
                </li>
              </Link>
            </ul>
          </li>
          <li onClick={handleLogout} className=" text-white cursor-pointer">
            <div className="bg-green-600 hover:bg-green-700 duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg">
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
