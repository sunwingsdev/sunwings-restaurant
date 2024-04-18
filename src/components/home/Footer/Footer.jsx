const Footer = () => {
  const navItems = (
    <>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Cash Payment History
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Online Order History
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Offline Order History
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Online Close
      </li>
      <li className="px-4 py-2 bg-[#D21312] text-white rounded text-xl font-semibold">
        Logout Pos
      </li>
    </>
  );
  return (
    <div className="py-8">
      <ul className="flex items-center justify-center gap-4">{navItems}</ul>
    </div>
  );
};

export default Footer;
