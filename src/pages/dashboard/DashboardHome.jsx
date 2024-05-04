import CountCard from "../../components/home/dashboard/countCard/CountCard";
import { useGetTotalOrderPriceQuery } from "../../redux/features/allApis/paymentApi/paymentApi";

const DashboardHome = () => {
  const { data, isLoading } = useGetTotalOrderPriceQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const { totalOrderPrice, todaysTotalSale, cashTotalPrice, onlineTotalPrice } =
    data;
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 px-4 py-6">
      <CountCard title={"Total Sale"} sale={totalOrderPrice} />
      <CountCard title={"Today's Total Sale"} sale={todaysTotalSale} />
      <CountCard title={"Cash Total Sale"} sale={cashTotalPrice} />
      <CountCard title={"Online Total Sale"} sale={onlineTotalPrice} />
    </div>
  );
};

export default DashboardHome;
