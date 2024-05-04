import { NavLink } from "react-router-dom";
import { useGetTotalOrderPriceQuery } from "../../../redux/features/allApis/paymentApi/paymentApi";

const Navbar = () => {
  const { data, isLoading } = useGetTotalOrderPriceQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2  text-white text-xl font-semibold ${
              isActive ? "border-b-4 border-green-600" : ""
            }`
          }
        >
          POS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/online-order"
          className={({ isActive }) =>
            `px-4 py-2  text-white text-xl font-semibold ${
              isActive ? "border-b-4 border-green-600" : ""
            }`
          }
        >
          Online Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/calculator"
          className={({ isActive }) =>
            `px-4 py-2  text-white text-xl font-semibold ${
              isActive ? "border-b-4 border-green-600" : ""
            }`
          }
        >
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sell-history"
          className={({ isActive }) =>
            `px-4 py-2  text-white text-xl font-semibold ${
              isActive ? "border-b-4 border-green-600" : ""
            }`
          }
        >
          Sell History
        </NavLink>
      </li>
      <li className={"px-4 py-2  text-white text-xl font-semibold "}>
        Todays Sale {data?.todaysTotalSale} Tk
      </li>
    </>
  );
  return (
    <div className="py-3 my-2 bg-[#D21312]">
      <ul className="flex items-center justify-center gap-4">{navItems}</ul>
    </div>
  );
};

export default Navbar;
