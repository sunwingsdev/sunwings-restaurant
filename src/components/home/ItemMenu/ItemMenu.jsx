import { Tab } from "@headlessui/react";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import ItemCard from "../itemCard/ItemCard";

const ItemMenu = ({ setOrders, orders }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tabList = ["Chicken", "Deals", "Burgers", "Rice Bowls", "Pizza"];
  const tabPanelList = [
    "Content 1",
    "Content 2",
    "Content 3",
    "Content 4",
    "Content 5",
    "Content 6",
    "Content 7",
    "Content 8",
  ];

  // Function to handle adding an item to the order list
  const handleAddToOrder = (item) => {
    const existingOrder = orders.find((order) => order.id === item.id);
    if (existingOrder) {
      // If the item already exists in the order list, increment its quantity
      const updatedOrders = orders.map((order) =>
        order.id === item.id
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );
      setOrders(updatedOrders);
    } else {
      // If the item is not in the order list, add it with a quantity of 1
      setOrders([...orders, { ...item, quantity: 1 }]);
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "Chicken Meat",
      details: "  Lorem ipsum dolor sit amet.",
      price: 100,
      discount: 10,
      itemImage: "",
      category: "Chicken",
      subCategory: "",
      stock: 3,
    },
    {
      id: 2,
      name: "Chicken bb",
      details: "  Lorem ipsum dolor sit amet.",
      price: 100,
      discount: 10,
      itemImage: "",
      category: "Chicken",
      subCategory: "",
      stock: 2,
    },
    {
      id: 3,
      name: "Chicken f",
      details: "  Lorem ipsum dolor sit amet.",
      price: 100,
      discount: 10,
      itemImage: "",
      category: "Chicken",
      subCategory: "",
      stock: 5,
    },
  ];

  return (
    <div>
      <Tab.Group>
        <Tab.List className={"text-white flex items-center gap-3 text-xl"}>
          {tabList.map((i) => (
            <Tab
              className={
                "px-6 py-1 bg-red-600 border-x border-black font-semibold"
              }
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
              className={`menu rounded-box absolute top-8  duration-500 ease-in-out transition-all ${
                isOpen ? "right-0" : "-right-96 hidden"
              }`}
            >
              {tabList.map((i) => (
                <Tab
                  onClick={() => setIsOpen(false)}
                  className={
                    "px-6 py-1 bg-red-600 border border-black font-semibold"
                  }
                  key={i}
                >
                  {i}
                </Tab>
              ))}
            </ul>
          </div>
        </Tab.List>
        <Tab.Panels>
          {tabPanelList.map((i) => (
            <Tab.Panel key={i}>{i}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      {menuItems.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          setOrders={setOrders}
          orders={orders}
          handleAddToOrder={handleAddToOrder} // Passing the function as prop
        />
      ))}
    </div>
  );
};

export default ItemMenu;
