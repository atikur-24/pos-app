import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Category = () => {
  return (
    <>
      {/* for small devices */}
      <div className="mx-2 mt-2 flex items-stretch space-x-3 text-sm lg:hidden lg:text-base">
        <select className="w-full cursor-pointer overflow-hidden rounded px-4 py-2.5 pl-9 text-gray-500 outline outline-1">
          <option value="All Categories">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Home & LifeStyle">Home & LifeStylel</option>
          <option value="Men Fashion">Men Fashion</option>
          <option value="Women Fashion">Women Fashion</option>
        </select>
      </div>
      {/* for large devices */}
      <div className="mx-2 mt-2 hidden items-center justify-between gap-3 text-sm font-semibold text-gray-500 lg:mx-4 lg:mt-4 lg:flex lg:gap-2">
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
    </>
  );
};

export default Category;
