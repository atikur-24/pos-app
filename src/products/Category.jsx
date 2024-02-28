import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Category = () => {
  return (
    <div className="mx-2 mt-2 flex items-center justify-between gap-3 text-sm font-semibold text-gray-500 lg:mx-4 lg:mt-4 lg:gap-2">
      <div className="cursor-pointer rounded border-2 border-blue-500 bg-white px-3 py-1.5 text-blue-500">
        All Categories
      </div>
      <div className="cursor-pointer rounded border-2 border-gray-500 bg-white px-3 py-1.5">
        Electronics
      </div>
      <div className="cursor-pointer rounded border-2 border-gray-500 bg-white px-3 py-1.5">
        Home & LifeStyle
      </div>
      <div className="cursor-pointer rounded border-2 border-gray-500 bg-white px-3 py-1.5">
        Men Fashion
      </div>
      <div className="cursor-pointer rounded border-2 border-gray-500 bg-white px-3 py-1.5">
        Women Fashion
      </div>
      <div>
        <PiDotsThreeOutlineVerticalFill className="text-2xl" />
      </div>
    </div>
  );
};

export default Category;
