import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartTable = ({ cart }) => {
  const { id, name, quantity, price } = cart || {};
  const totalPrice = price * quantity;

  return (
    <tr className="font-medium text-gray-500">
      <td className="p-0">
        <FiEdit className="cursor-pointer" />
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td className="flex items-center justify-center gap-x-3">
        <FaMinusCircle className="text-lg" />
        <span>{quantity}</span>
        <FaPlusCircle className="text-lg" />
      </td>
      <td>${totalPrice}</td>
      <td className="p-0">
        <RiDeleteBin5Line className="cursor-pointer text-lg text-red-700/80" />
      </td>
    </tr>
  );
};

export default CartTable;
