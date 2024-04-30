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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CashPayment from "../pages/Home/CashPayment/CashPayment";
import OnlinePayment from "../pages/Home/OnlinePayment/OnlinePayment";
import SellHistory from "../pages/Home/SellHistory/SellHistory";
import AllHistory from "../pages/dashboard/SaleHistory/AllHistory";
import AllBranches from "../pages/dashboard/Branch/AllBranches";
import AddSubcategory from "../pages/dashboard/MenuCategory/AddSubcategory";
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeLayout />
      </PrivateRoute>
    ),
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
      {
        path: "cash-payment-history",
        element: <CashPayment />,
      },
      {
        path: "online-payment-history",
        element: <OnlinePayment />,
      },
      {
        path: "sell-history",
        element: <SellHistory />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
        path: "add-subcategory",
        element: <AddSubcategory />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
      {
        path: "all-items",
        element: <AllItems />,
      },
      {
        path: "all-history",
        element: <AllHistory />,
      },
      {
        path: "online-history",
        element: <OnlinePayment />,
      },
      // {
      //   path: "all-branches",
      //   element: <AllBranches />,
      // },
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
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Router;
