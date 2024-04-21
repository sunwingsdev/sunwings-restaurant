import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ReceiptSection = ({ orders, setOrders }) => {
  // Function to handle quantity increment
  const handleIncrement = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity += 1;
    setOrders(updatedOrders);
  };

  // Function to handle quantity decrement
  const handleDecrement = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity -= 1;
    // Check if quantity is greater than 0 before decrementing
    if (updatedOrders[index].quantity < 0) {
      updatedOrders[index].quantity = 0;
    }
    setOrders(updatedOrders);
  };

  const handleItemDelete = (order) => {
    const existingOrders = orders?.filter((item) => item?._id !== order._id);
    setOrders(existingOrders);
  };

  const handleOrderPlace = () => {
    console.log(orders);
  };

  // Calculate the remaining number of dummy rows needed
  const remainingDummyRows = Math.max(14 - orders.length, 0);

  // Generate dummy rows to ensure a minimum of 8 rows
  const dummyRows = Array.from({ length: remainingDummyRows }).map(
    (_, index) => (
      <tr key={`dummy-${index}`}>
        <td className="border-l border-r border-black"></td>
        <td className="border-l border-r border-black"></td>
        <td className="border-l border-r border-black"></td>
        <td className="border-l border-r border-black"></td>
        <td className=""></td>
        <td className="border-r border-black"></td>
      </tr>
    )
  );

  return (
    <div className="overflow-x-auto">
      <table className="table border border-black w-full">
        {/* head */}
        <thead className="text-lg font-bold bg-[#f40027] text-white">
          <tr>
            <th className="border-r border-black">SL</th>
            <th className="border-r border-black">Description</th>
            <th className="border-r border-black">Price</th>
            <th className="border-r border-black">QTY</th>
            <th className="border-black">Sub-total</th>
            <th className="border-black"></th>
          </tr>
        </thead>
        <tbody className="text-base">
          {/* rows */}
          {orders?.map((order, i) => (
            <tr key={order._id}>
              <th className="border-r border-black">{i + 1}</th>
              <td className="border-r border-black">{order.name}</td>
              <td className="border-r border-black">
                {order.price - (order.price * order.discount) / 100} TK
              </td>
              <td className="flex items-center gap-2 border-r border-black">
                <FiMinusCircle
                  className="cursor-pointer hover:text-red-600"
                  onClick={() => handleDecrement(i)}
                />
                {order.quantity}
                <FiPlusCircle
                  className="cursor-pointer hover:text-red-600"
                  onClick={() => handleIncrement(i)}
                />
              </td>
              <td className=" border-black">
                {order.quantity *
                  (order.price - (order.price * order.discount) / 100)}{" "}
                TK
              </td>
              <td className="border-r border-black">
                <RiDeleteBin6Line
                  onClick={() => handleItemDelete(order)}
                  className="hover:text-red-800"
                  size={20}
                />
              </td>
            </tr>
          ))}
          {dummyRows}
        </tbody>
      </table>
      <div className="text-right pt-3 pb-5 mt-1">
        <button
          onClick={handleOrderPlace}
          className="bg-green-800 hover:bg-[#f40027] duration-300 text-white p-2 text-lg font-bold "
        >
          Order Place
        </button>
      </div>
    </div>
  );
};

export default ReceiptSection;
