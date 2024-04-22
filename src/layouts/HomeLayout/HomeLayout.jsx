import { useState } from "react";
import Footer from "../../components/home/Footer/Footer";
import ItemMenu from "../../components/home/ItemMenu/ItemMenu";
import Navbar from "../../components/home/Navbar/Navbar";
import Header from "../../components/home/header/Header";
import ReceiptSection from "../../components/home/receiptSection/ReceiptSection";

const HomeLayout = () => {
  const [orders, setOrders] = useState([]);

  return (
    <div className="container mx-auto">
      <Header />
      <Navbar />
      <div className="flex justify-center gap-8">
        <ReceiptSection orders={orders} setOrders={setOrders} />
        <ItemMenu setOrders={setOrders} orders={orders} />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
