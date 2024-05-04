const CountCard = ({ title, sale }) => {
  return (
    <div className="px-3 lg:px-4 py-6 bg-gray-100 hover:bg-gray-200 text-center rounded shadow-xl hover:shadow-2xl duration-300 border-t-4 border-t-gray-100 hover:border-t-[#f40027]">
      <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
      <p className="text-lg lg:text-xl font-bold text-[#f40027]">
        <span>{sale} </span>
        Tk
      </p>
    </div>
  );
};

export default CountCard;
