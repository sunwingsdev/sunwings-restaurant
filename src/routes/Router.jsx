import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddItem from "../pages/dashboard/MenuCategory/AddItem";
import AddCategory from "../pages/dashboard/MenuCategory/AddCategory";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
    ],
  },
]);

export default Router;
