import { BiSolidOffer } from "react-icons/bi";
import { FaRegCreditCard, FaRegHandRock } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const Checkout = ({ clearCart }) => {
  return (
    <div className="flex items-center justify-between space-x-2 pb-4">
      <button
        onClick={clearCart}
        className="flex items-center gap-2 rounded bg-[#FADEDD] px-4 py-2 text-lg font-semibold text-[#EA7F7B]"
      >
        <RxCrossCircled className="" />
        <span>Cancel</span>
      </button>
      <button className="flex items-center gap-2 rounded bg-[#E7E9F6] px-4 py-2 text-lg font-semibold text-[#5C6AC4]">
        <FaRegHandRock className="" />
        Hold
      </button>
      <button className="flex items-center gap-2 rounded bg-[#E7E9F6] px-4 py-2 text-lg font-semibold text-[#5C6AC4]">
        <BiSolidOffer className="" />
        <span>Discount</span>
      </button>
      <button className="flex items-center gap-2 rounded bg-[#D7E3F7] px-4 py-2 text-lg font-semibold text-[#3674D9]">
        <FaRegCreditCard className="" />
        <span>Pay Now</span>
      </button>
    </div>
  );
};

export default Checkout;
