import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useToasts } from "react-toast-notifications";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async () => {
    // Add your login logic here
    setLoading(true);
    try {
      const result = await signIn(email, password);
      const loggedUser = result?.user;
      addToast(
        `${loggedUser?.displayName || "Unknown user"} logged in successfully`,
        {
          appearance: "success",
          autoDismiss: true,
        }
      );
      navigate(from, { replace: true });
      setLoading(false);
      // navigate(from, { replace: true });
    } catch (error) {
      addToast(error.message, {
        appearance: "success",
        autoDismiss: true,
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Restaurant POS Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="w-full px-3 py-2 pr-10 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute inset-y-0 right-0 px-4 py-2 bg-transparent text-sm font-semibold text-gray-700 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogin}
          >
            {loading ? "Logging in" : "Login"}
          </button>
          {/* You can add forgot password link or other options here */}
        </div>
      </div>
    </div>
  );
};

export default Login;
