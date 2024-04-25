import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCameraRetro } from "react-icons/fa";
import { imageUpload } from "../../api/api";
import { AuthContext } from "../../providers/AuthProviders";
import { useAddUserMutation } from "../../redux/features/allApis/userApi/userApi";
import { useToasts } from "react-toast-notifications";

const Register = () => {
  const { createUser, updateUserProfile, setUser, loading, setLoading, user } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [addUser] = useAddUserMutation();
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { addToast } = useToasts();

  const password = watch("password", "");
  // const confirmPassword = watch("confirmPassword", "");

  const onSubmit = async (data) => {
    try {
      const imageData = await imageUpload(image);
      const imageUrl = imageData?.data?.display_url;
      data.itemImage = imageUrl;
      setLoading(true);
      createUser(data.email, data.password)
        .then((result) => {
          updateUserProfile(data.name, imageUrl)
            .then(() => {
              setUser({
                ...user,
                displayName: data.name,
                photoUrl: imageUrl,
              });
              const userInfo = {
                uid: result.user?.uid,
                name: data.name,
                image: imageUrl,
                email: data.email,
                phone: data.phoneNumber,
                branch: data.branch,
              };
              addUser(userInfo)
                .then((result) => {
                  if (result.data.insertedId) {
                    setLoading(false);
                    reset();
                    addToast("User created and logged in successfully", {
                      appearance: "success",
                      autoDismiss: true,
                    });
                  }
                })
                .catch((error) => {
                  addToast(error.message, {
                    appearance: "error",
                    autoDismiss: true,
                  });
                });
            })
            .catch((error) => {
              addToast(error.message, {
                appearance: "error",
                autoDismiss: true,
              });
            });
        })
        .catch((error) => {
          addToast(error.message, {
            appearance: "error",
            autoDismiss: true,
          });
        });
    } catch (error) {
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    setLoading(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: { value: /^\d+$/, message: "Invalid phone number" },
              })}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <label
              htmlFor="image"
              className="relative flex items-center justify-center w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200"
            >
              <input
                {...register("image")}
                onChange={handleImageChange}
                className="hidden"
                id="image"
                type="file"
              />

              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded"
                />
              ) : (
                <div className="flex flex-row gap-2 justify-center items-center">
                  <FaCameraRetro className="text-4xl" />
                  <p>Click to add image</p>
                </div>
              )}
            </label>
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="ml-2 px-2 py-1 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="flex items-center">
              <input
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="ml-2 px-2 py-1 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="branch"
            >
              Branch
            </label>
            <select
              {...register("branch", { required: "Branch is required" })}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="branch"
            >
              <option value="">Select Branch</option>
              <option value="mirpur-1">Mirpur 1</option>
              <option value="mirpur-10">Mirpur 10</option>
              <option value="bashundhara-r/a">Bashundhara R/A</option>
            </select>
            {errors.branch && (
              <span className="text-red-500 text-sm">
                {errors.branch.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
