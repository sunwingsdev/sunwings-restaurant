import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useToasts } from "react-toast-notifications";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
      })
      .catch((error) => {
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      });
    setLoading(false);
  };
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2  text-white  text-xl font-semibold ${
              isActive ? "bg-green-600" : "bg-[#D21312]"
            }`
          }
          to="/cash-payment-history"
        >
          Cash Payment History
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2  text-white  text-xl font-semibold ${
              isActive ? "bg-green-600" : "bg-[#D21312]"
            }`
          }
          to="/online-payment-history"
        >
          Online Payment History
        </NavLink>
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Online Close
      </li>
      <li
        onClick={handleLogout}
        className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold"
      >
        Logout Pos
      </li>
    </>
  );
  return (
    <div className="py-8">
      <ul className="flex items-center justify-center gap-4">{navItems}</ul>
    </div>
  );
};

export default Footer;
