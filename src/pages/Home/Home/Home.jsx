import { useState } from "react";
import ItemMenu from "../../../components/home/ItemMenu/ItemMenu";
import ReceiptSection from "../../../components/home/receiptSection/ReceiptSection";

const Home = () => {
  const [orders, setOrders] = useState([]);
  return (
    <div className="flex justify-center gap-8">
      <ReceiptSection orders={orders} setOrders={setOrders} />
      <ItemMenu setOrders={setOrders} orders={orders} />
    </div>
  );
};

export default Home;
