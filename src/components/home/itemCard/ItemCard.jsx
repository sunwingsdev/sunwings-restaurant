const ItemCard = ({ item, handleAddToOrder }) => {
  return (
    <div onClick={() => handleAddToOrder(item)}>
      <div className="w-48 border rounded overflow-hidden relative">
        <img className="min-h-48" src={item.itemImage} alt="" />
        {item.discount !== 0 && (
          <p className="text-red-700 absolute top-0 left-0 font-bold text-lg py-1 px-2 bg-green-600">
            -{item.discount} %
          </p>
        )}
        <div className="px-2 pt-1 pb-3 bg-slate-100">
          <div className="flex justify-between items-center">
            <p className="md:text-lg font-semibold">{item.name}</p>
          </div>
          <div className="flex justify-between items-center gap-2 mt-1">
            <div className="flex flex-col items-end w-2/3">
              <p>
                {item.discount !== 0 && (
                  <span className="line-through text-sm">{item.price} </span>
                )}
                <span className="text-xl font-semibold">
                  {item.price - (item.price * item.discount) / 100}{" "}
                </span>
                Tk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
