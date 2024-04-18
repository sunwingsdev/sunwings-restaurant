import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
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
    ],
  },
]);

export default Router;
