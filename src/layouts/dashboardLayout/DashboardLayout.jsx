import Sidebar from "../../components/home/dashboard/sidebar/Sidebar";
import Header from "../../components/home/header/Header";

const DashboardLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="flex mt-5">
        <div className="basis-[18%] h-screen bg-gray-900">
          <Sidebar />
        </div>
        <div className="basis-[82%]">outlet</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
