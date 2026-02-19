// Libraries
import { useState } from "react";

// Components
import Header from "./components/Header";

import { useAuthStore } from "@/stores/auth/auth.store";
import { FaEdit, FaRegEnvelope, FaUserCircle } from "react-icons/fa";

function Profile() {
  const user = useAuthStore((state) => state.user);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=" w-screen bg-white">
      <Header toggle={handleMenu} showMenu={showMenu} />
      <div className="mt-25  pt-8 px-5">
        <h1 className="poppins-semibold fade-left text-xl text-[#242423]">
          Manage Profile
        </h1>
        <div className="flex flex-col mt-10 justify-center items-center px-5">
          <FaUserCircle className="text-8xl fade-down text-[#A5491B]" />
          <div className="w-full fade-in mt-2 flex flex-col items-center justify-center">
            <h1 className="poppins-medium text-xl">{user?.name}</h1>
            <p className="poppins-regular text-xs text-gray-400">Full name</p>
          </div>
          <div className="w-full h-30 border fade-up rounded-xl mt-3 relative px-5 flex items-center">
            <FaEdit className="text-[#0D4861] text-xl absolute right-3 top-3" />
            <div className="relative w-full">
              <FaRegEnvelope className="absolute left-2 top-1/2 text-lg -translate-y-1/2" />
              <input
                value={user?.email}
                type="text"
                name="email"
                className="peer border-b poppins-semibold text-sm px-8 py-2 focus:outline-none focus:ring-0 border-black w-full"
                placeholder=""
                required
              />
              <label
                className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
                           transition-all duration-200 poppins-regular text-sm
                           peer-focus:top-1 peer-valid:top-1 peer-valid:text-xs peer-focus:text-xs peer-focus:text-gray-600
                            "
              >
                Email
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
