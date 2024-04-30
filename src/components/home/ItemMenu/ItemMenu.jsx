import { Tab } from "@headlessui/react";
import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import ItemCard from "../itemCard/ItemCard";
import { useGetItemsQuery } from "../../../redux/features/allApis/itemApi/itemApi";

const ItemMenu = ({ setOrders, orders }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of items per page
  const [searchTerm, setSearchTerm] = useState(""); // Search term for item name
  const { data: menuItems, isLoading } = useGetItemsQuery();
  const [filteredItems, setFilteredItems] = useState([]);

  const tabList = ["chicken", "deals", "burger", "rice-bowls", "pizza"];

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Function to handle adding an item to the order list
  const handleAddToOrder = (item) => {
    const existingOrder = orders.find((order) => order._id === item._id);
    if (existingOrder) {
      // If the item already exists in the order list, increment its quantity
      const updatedOrders = orders.map((order) =>
        order._id === item._id
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );
      setOrders(updatedOrders);
    } else {
      // If the item is not in the order list, add it with a quantity of 1
      setOrders([...orders, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    // Filter items based on selected category and search term
    let filtered = menuItems;
    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredItems(filtered);
    setCurrentPage(1); // Reset current page when filtering changes
  }, [selectedCategory, menuItems, searchTerm]);

  const handleSelect = (category) => {
    setIsOpen(false);
    setSelectedCategory(category);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems?.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Tab.Group>
        <Tab.List className={"text-white flex items-center gap-3 text-xl"}>
          {tabList.map((i) => (
            <Tab
              onClick={() => handleSelect(i)}
              className={`px-6 py-1 font-semibold capitalize hover:bg-green-600  ${
                selectedCategory === i
                  ? "bg-green-600 border-b-4 border-red-600"
                  : "bg-red-600"
              }`}
              key={i}
            >
              {i}
            </Tab>
          ))}
          <div className="relative">
            <TiThMenu
              onClick={() => setIsOpen(!isOpen)}
              size={35}
              className="text-red-600 border border-black font-semibold"
            />
            {/* {isOpen && ( */}
            <ul
              className={`menu rounded-box absolute top-8 z-50 duration-500 ease-in-out transition-all ${
                isOpen ? "right-0" : "-right-96 hidden"
              }`}
            >
              {tabList.map((i) => (
                <Tab
                  onClick={() => handleSelect(i)}
                  className={`px-6 py-1 font-semibold capitalize hover:bg-green-600  ${
                    selectedCategory === i ? "bg-green-600" : "bg-red-600"
                  }`}
                  key={i}
                >
                  {i}
                </Tab>
              ))}
            </ul>
          </div>
        </Tab.List>
        <div className="flex justify-end mt-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 outline outline-blue-100 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Tab.Panels>
          {tabList.map((category) => (
            <Tab.Panel key={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-4">
                {filteredItems
                  ?.slice(indexOfFirstItem, indexOfLastItem)
                  .map((item) => (
                    <ItemCard
                      key={item._id}
                      item={item}
                      setOrders={setOrders}
                      orders={orders}
                      handleAddToOrder={handleAddToOrder}
                    />
                  ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-full focus:outline-none ${
            currentPage === 1
              ? "bg-gray-300 text-gray-600"
              : "bg-red-600 text-white"
          }`}
        >
          Previous
        </button>
        <ul className="flex gap-2">
          {Array.from(
            {
              length: Math.ceil(filteredItems?.length / itemsPerPage),
            },
            (_, i) => i + 1
          ).map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded-full focus:outline-none ${
                  currentPage === number
                    ? "bg-red-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(filteredItems?.length / itemsPerPage)
          }
          className={`px-3 py-1 rounded-full focus:outline-none ${
            currentPage === Math.ceil(filteredItems?.length / itemsPerPage)
              ? "bg-gray-300 text-gray-600"
              : "bg-red-600 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemMenu;
