import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartTable = ({ cart, RemoveToCart }) => {
  const { id, name, quantity, price } = cart || {};
  const totalPrice = price * quantity;

  return (
    <tr className="font-medium text-gray-500">
      <td className="p-0">
        <FiEdit className="cursor-pointer" />
      </td>
      <td>{name}</td>
      <td className="text-right">${price.toFixed(2)}</td>
      <td className="flex items-center justify-center gap-x-3">
        <FaMinusCircle className="text-lg" />
        <span>{quantity}</span>
        <FaPlusCircle className="text-lg" />
      </td>
      <td className="text-right">${totalPrice.toFixed(2)}</td>
      <td onClick={() => RemoveToCart(id)} className="flex justify-end p-0">
        <RiDeleteBin5Line className="cursor-pointer text-lg text-red-700/80" />
      </td>
    </tr>
  );
};

export default CartTable;
