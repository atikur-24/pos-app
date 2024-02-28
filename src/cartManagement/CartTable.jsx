import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { addToDb, decreaseQuantity } from "../utils/FakeDB";

const CartTable = ({ cart, setCarts, RemoveToCart }) => {
  const { id, name, quantity, price } = cart || {};
  const totalPrice = price * quantity;

  // increase product quantity and update dom to realtime
  const handleIncreaseQuantity = (id) => {
    const updatedCart = {
      ...cart,
      quantity: cart.quantity + 1,
    };

    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.map((item) =>
        item.id === updatedCart.id ? updatedCart : item,
      );
      return updatedCarts;
    });

    addToDb(id);
  };

  // decrease product quantity and update dom to realtime
  const handleDecreaseQuantity = (id) => {
    decreaseQuantity(id);
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );
      return updatedCarts;
    });
  };

  return (
    <tr className="font-medium text-gray-500">
      <td className="p-0">
        <FiEdit className="cursor-pointer" />
      </td>
      <td>{name}</td>
      <td className="text-right">${price.toFixed(2)}</td>
      <td className="flex items-center justify-center gap-x-3">
        <FaMinusCircle
          onClick={() => handleDecreaseQuantity(id)}
          className="cursor-pointer text-lg"
        />
        <span>{quantity}</span>
        <FaPlusCircle
          onClick={() => handleIncreaseQuantity(id)}
          className="cursor-pointer text-lg"
        />
      </td>
      <td className="text-right">${totalPrice.toFixed(2)}</td>
      <td onClick={() => RemoveToCart(id)} className="flex justify-end p-0">
        <RiDeleteBin5Line className="cursor-pointer text-lg text-red-700/80" />
      </td>
    </tr>
  );
};

export default CartTable;
