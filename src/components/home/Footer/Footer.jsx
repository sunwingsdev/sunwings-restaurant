import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useToasts } from "react-toast-notifications";

const Footer = () => {
  const { logOut, user, setLoading } = useContext(AuthContext);
  const { addToast } = useToasts();
  // handle log out here
  const handleLogout = () => {
    if (user) {
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
    }
    addToast("No user to be logout", {
      appearance: "error",
      autoDismiss: true,
    });
    setLoading(false);
  };
  const navItems = (
    <>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Cash Payment History
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Online Order History
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Offline Order History
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
