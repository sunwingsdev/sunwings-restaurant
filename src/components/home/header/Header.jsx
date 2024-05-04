import headerLogo from "../../../assets/kfc-logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-3 gap-2">
        <img className="w-12 md:w-16 lg:w-20" src={headerLogo} alt="" />
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600 ">
          কেন্টাকি ফ্রাইড চিকেন KFC
        </p>
        <img className="w-12 md:w-16 lg:w-20" src={headerLogo} alt="" />
      </div>
    </div>
  );
};

export default Header;
