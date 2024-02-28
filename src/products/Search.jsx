import { CiBarcode } from "react-icons/ci";
import { ImSearch } from "react-icons/im";
const Search = () => {
    return (
        <div className="flex items-center justify-between text-gray-500 px-4">
            <div className="flex items-center">
                <ImSearch className="text-lg" />
                <input className="py-1 lg:py-2 pl-2 lg:pl-4 pr-2 bg-[#f4f6f8] focus:outline-none w-full" type="text" placeholder="Search Products..." />
            </div>
            <div>
                <CiBarcode className="text-2xl font-bold" />
            </div>
        </div>
    );
};

export default Search;
