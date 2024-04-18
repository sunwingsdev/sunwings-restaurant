import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const ReceiptSection = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border border-black">
          {/* head */}
          <thead className="text-lg font-bold bg-[#f40027] text-white">
            <tr>
              <th className="border-r border-black">SL</th>
              <th className="border-r border-black">Description</th>
              <th className="border-r border-black">Price</th>
              <th className="border-r border-black">QTY</th>
              <th className="border-r border-black">Sub-total</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {/* row 1 */}
            <tr>
              <th className="border-r border-black">01</th>
              <td className="border-r border-black">Chicken Meat</td>
              <td className="border-r border-black">99 TK</td>
              <td className="flex items-center gap-2 border-r border-black">
                <FiMinusCircle className="cursor-pointer hover:text-red-600" />1
                <FiPlusCircle className="cursor-pointer  hover:text-red-600" />
              </td>
              <td>599 TK</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="border-r border-black">02</th>
              <td className="border-r border-black">Meat</td>
              <td className="border-r border-black">200 TK</td>
              <td className="flex items-center gap-2 border-r border-black">
                <FiMinusCircle className="cursor-pointer hover:text-red-600" />1
                <FiPlusCircle className="cursor-pointer  hover:text-red-600" />
              </td>
              <td className="border-r border-black">200 Tk</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
            <tr>
              <th className="border-r border-black"></th>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="flex items-center gap-2 border-r border-black"></td>
              <td className="border-r border-black"></td>
            </tr>
          </tbody>
        </table>
        <div className="text-right pt-3 pb-5">
          <button className="bg-green-800 hover:bg-[#f40027] duration-300 text-white p-2 text-lg font-bold ">
            Order Place
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptSection;
