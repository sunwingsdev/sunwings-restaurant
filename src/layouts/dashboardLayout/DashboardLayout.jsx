import { Outlet } from "react-router-dom";
import Sidebar from "../../components/home/dashboard/sidebar/Sidebar";
import Header from "../../components/home/header/Header";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="basis-[18%] lg:basis-[24%] xl:basis-[18%] 2xl:basis-[16%] h-screen bg-gray-900 sticky top-0 lg:block hidden">
          <Sidebar />
        </div>
        <div className="basis-[100%] lg:basis-[76%] xl:basis-[82%] 2xl:basis-[84%] relative">
          <div className="sticky top-0 bg-white border-b-4">
            <Header />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
