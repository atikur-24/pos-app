import { CgProfile } from "react-icons/cg";
import { FiPlusCircle } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="flex items-center justify-between rounded bg-[#EEF0F9] px-2 py-1.5 text-sm font-medium text-[#5C6AC4] lg:px-3 lg:py-3 lg:text-base">
      <div className="flex items-center gap-x-2">
        <CgProfile className="cursor-pointer text-xl lg:text-2xl" />
        <p>Steve Jobs</p>
      </div>
      <div>
        <FiPlusCircle className="cursor-pointer text-xl lg:text-2xl" />
      </div>
    </div>
  );
};

export default Profile;
