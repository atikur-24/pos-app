import { BiSolidPlusCircle } from "react-icons/bi";
import { FaBars, FaHistory } from "react-icons/fa";
import { LuPenSquare, LuTruck } from "react-icons/lu";

const TopMenu = () => {
  return (
    <div className="flex items-center justify-between gap-x-1 pt-3 text-sm font-medium text-[#5C6AC4] lg:text-base">
      <button>
        <FaBars className="text-xl text-gray-500" />
      </button>
      <button className="flex items-center gap-x-2 rounded bg-[#E7E9F6] px-2 py-1 lg:px-3 lg:py-1.5">
        <LuPenSquare />
        <p>Note</p>
      </button>
      <button className="flex items-center gap-x-2 rounded bg-[#E7E9F6] px-2 py-1 lg:px-3 lg:py-1.5">
        <LuTruck className="text-lg" />
        <p>Shipping</p>
      </button>
      <button className="flex items-center gap-x-2 rounded bg-[#E7E9F6] px-2 py-1 lg:px-3 lg:py-1.5">
        <FaHistory />
        <p>Hold Orders</p>
      </button>
      <button className="flex items-center gap-x-2 rounded bg-[#E7E9F6] px-2 py-1 lg:px-3 lg:py-1.5">
        <BiSolidPlusCircle className="text-lg" />
        <p>New Item</p>
      </button>
    </div>
  );
};
export default TopMenu;
