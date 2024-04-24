import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  // Simulating an error
  const errorCode = 404;
  const errorMessage = "Oops! The page you're looking for could not be found.";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaExclamationCircle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
        {errorCode}
      </h1>
      <p className="text-lg text-gray-600 mb-4">{errorMessage}</p>
      <div className="flex justify-center items-center gap-2 flex-row">
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white btn"
        >
          Refresh
        </button>
        <Link to="/">
          <button className="bg-green-500 hover:bg-green-600 text-white btn">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
