import vis from "../../../assets/itme.jpg";

const ItemCard = () => {
  return (
    <div>
      <div className="w-48 border rounded overflow-hidden">
        <img src={vis} alt="" />
        <div className="px-2 pt-1 pb-3 bg-slate-100">
          <p className="text-xl font-semibold">Chicken Meat</p>
          <div className="flex justify-evenly items-center gap-2 mt-1">
            <button className="bg-green-800 text-white px-2 py-1 rounded w-[60%]">
              Add To Cart
            </button>
            <button className="bg-[#f40027] text-white px-2 py-1 rounded w-[38%]">
              99 Tk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
