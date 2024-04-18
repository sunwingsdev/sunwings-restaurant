import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

export default Router;
