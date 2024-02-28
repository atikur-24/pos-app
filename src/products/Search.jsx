import { CiBarcode } from "react-icons/ci";
import { ImSearch } from "react-icons/im";
const Search = ({ onSearch }) => {
  return (
    <div className="flex items-center justify-between px-4 text-gray-500 shadow-md">
      <div className="flex items-center">
        <ImSearch className="text-lg" />
        <input
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-[#f4f6f8] py-2 pl-2 pr-2 focus:outline-none lg:py-3 lg:pl-4"
          type="text"
          placeholder="Search Products..."
        />
      </div>
      <div>
        <CiBarcode className="text-2xl font-bold" />
      </div>
    </div>
  );
};

export default Search;
