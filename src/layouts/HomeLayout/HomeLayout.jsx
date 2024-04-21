import Footer from "../../components/home/Footer/Footer";
import Navbar from "../../components/home/Navbar/Navbar";
import Header from "../../components/home/header/Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
