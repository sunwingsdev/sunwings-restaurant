import CountCard from "../../components/home/dashboard/countCard/CountCard";

const DashboardHome = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 px-4 py-6">
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
      <CountCard />
    </div>
  );
};

export default DashboardHome;
