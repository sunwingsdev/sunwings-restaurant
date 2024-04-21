import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2  text-white rounded-3xl text-xl font-semibold ${
              isActive ? "bg-green-600" : "bg-[#D21312]"
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
            `px-4 py-2  text-white rounded-3xl text-xl font-semibold ${
              isActive ? "bg-green-600" : "bg-[#D21312]"
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
            `px-4 py-2  text-white rounded-3xl text-xl font-semibold ${
              isActive ? "bg-green-600" : "bg-[#D21312]"
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
            `px-4 py-2  text-white rounded-3xl text-xl font-semibold ${
              isActive ? "bg-green-600" : "bg-[#D21312]"
            }`
          }
        >
          Sell History
        </NavLink>
      </li>
      <li>
        <NavLink
          to=""
          className={({ isActive }) =>
            `px-4 py-2  text-white rounded-3xl text-xl font-semibold ${
              isActive ? "bg-green-600" : "bg-[#D21312]"
            }`
          }
        >
          Total
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="py-8">
      <ul className="flex items-center justify-center gap-4">{navItems}</ul>
    </div>
  );
};

export default Navbar;
