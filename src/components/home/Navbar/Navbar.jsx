const Navbar = () => {
  const navItems = (
    <>
      {" "}
      <li className="px-4 py-2 bg-[#D21312] text-white rounded-3xl text-xl font-semibold">
        POS
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded-3xl text-xl font-semibold">
        Online order
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded-3xl text-xl font-semibold">
        Calculator
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded-3xl text-xl font-semibold">
        Sell History
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded-3xl text-xl font-semibold">
        Total
      </li>
    </>
  );
  return (
    <div className="py-8">
      <ul className="flex items-center justify-center gap-4">{navItems}</ul>
    </div>
  );
};

export default Navbar;
