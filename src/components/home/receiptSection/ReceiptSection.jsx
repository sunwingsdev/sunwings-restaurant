import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Modal from "../../shared/Modal";
import OrderForm from "../OrderForm/OrderForm";

const ReceiptSection = ({ orders, setOrders }) => {
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);
  const [vat, setVat] = useState(0);
  const [orderModal, setOrderModal] = useState(false);

  // Calculate total order price and VAT whenever orders change
  useEffect(() => {
    let totalPrice = 0;
    orders.forEach((order) => {
      totalPrice +=
        order.quantity * (order.price - (order.price * order.discount) / 100);
    });
    setTotalOrderPrice(totalPrice.toFixed(2));

    // Calculate VAT
    const vatAmount = totalPrice * 0.075; // 7.5% VAT
    setVat(vatAmount.toFixed(2));
  }, [orders]);

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

  const closeOrderModal = () => {
    setOrderModal(false);
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
              <td
                className="border-r border-black"
                style={{
                  maxWidth: "150px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {order.name}
              </td>
              <td
                className="border-r border-black"
                style={{ width: "100px", textAlign: "right" }}
              >
                {parseFloat(
                  order.price - (order.price * order.discount) / 100
                ).toFixed(2)}{" "}
                TK
              </td>
              <td
                className="flex items-center gap-2  border-black"
                style={{ borderCollapse: "collapse" }}
              >
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
              <td
                className=" border-l border-black"
                style={{ width: "100px", textAlign: "right" }}
              >
                {(
                  order.quantity *
                  (order.price - (order.price * order.discount) / 100)
                ).toFixed(2)}{" "}
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
      <div className="flex">
        <div className="bg-[#f40027] text-white w-full text-center py-1 text-xl font-semibold">
          <h3>Sub Total</h3>
        </div>
        <div className="bg-gray-500 text-white w-full text-center py-1 text-xl font-semibold">
          <p>{totalOrderPrice} TK</p>
        </div>
      </div>
      <div className="flex pt-1">
        <div className="bg-[#f40027] text-white w-full text-center py-1 text-xl font-semibold">
          <h3>Vat & Tax 7.5%</h3>
        </div>
        <div className="bg-gray-500 text-white w-full text-center py-1 text-xl font-semibold">
          <p>{vat} TK</p>
        </div>
      </div>
      <div className="flex py-1">
        <div className="bg-[#f40027] text-white w-full text-center py-1 text-xl font-semibold">
          <h3>Total Pay Bill</h3>
        </div>
        <div className="bg-gray-800 text-white w-full text-center py-1 text-xl font-semibold">
          <p>{(parseFloat(totalOrderPrice) + parseFloat(vat)).toFixed(2)} TK</p>
        </div>
      </div>
      <div className="flex pb-2">
        <div className="bg-[#f40027] text-white w-full text-center py-1 text-xl font-semibold">
          <h3>Total Payable</h3>
        </div>
        <div className="bg-gray-800 text-white w-full text-center py-1 text-xl font-semibold">
          <p>
            {Math.ceil(
              (parseFloat(totalOrderPrice) + parseFloat(vat)).toFixed(2)
            )}{" "}
            TK
          </p>
        </div>
      </div>

      <div className="text-right pt-3 pb-5 mt-1">
        <button
          onClick={() => setOrderModal(true)}
          className="bg-green-800 hover:bg-[#f40027] duration-300 text-white p-2 text-lg font-bold "
        >
          Order Place
        </button>
        <Modal isOpen={orderModal} closeModal={closeOrderModal}>
          <OrderForm
            closeModal={closeOrderModal}
            orders={orders}
            totalOrderPrice={Math.ceil(
              (parseFloat(totalOrderPrice) + parseFloat(vat)).toFixed(2)
            )}
          />
        </Modal>
      </div>
    </div>
  );
};

export default ReceiptSection;
