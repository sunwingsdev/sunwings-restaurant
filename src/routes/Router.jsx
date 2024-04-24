import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddItem from "../pages/dashboard/MenuCategory/AddItem";
import AddCategory from "../pages/dashboard/MenuCategory/AddCategory";
import OnlineOrder from "../pages/Home/OnlineOrder/OnlineOrder";
import Home from "../pages/Home/Home/Home";
import Calculator from "../pages/Home/Calculator/Calculator";
import AllItems from "../pages/dashboard/MenuCategory/AllItems";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "online-order",
        element: <OnlineOrder />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "add-item",
        element: <AddItem />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
      {
        path: "all-items",
        element: <AllItems />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);

export default Router;
