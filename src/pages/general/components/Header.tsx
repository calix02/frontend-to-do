// Libraries
import { useEffect, useState } from "react";

//Components
import LogoutModal from "./LogoutModal";

// Assets
import AppLogo from "@/assets/app-logo.svg";

// Icons
import { FaRegUser, FaTasks } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
type HeaderProps = {
  showMenu: boolean;
  toggle: () => void;
};
const Header = ({ showMenu, toggle }: HeaderProps) => {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (logout) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });

  return (
    <>
      {logout && <LogoutModal />}
      <div
        className={`${showMenu ? "rounded-none shadow-none" : "rounded-2xl"} w-screen h-25 shadow-md flex fixed bg-white z-20 top-0 justify-start gap-3 items-center px-5`}
      >
        {showMenu ? (
          <IoClose onClick={toggle} className="text-xl" />
        ) : (
          <IoMenu onClick={toggle} className="text-xl" />
        )}
        <div className="flex gap-2 items-center">
          <img src={AppLogo} className="w-18" alt="App Logo" />
          <h1 className="playfair-bold text-3xl">To Do App</h1>
        </div>
      </div>
      {showMenu && (
        <div className="w-screen fade-down bg-white poppins-semibold text-sm h-50 z-10 rounded-b-2xl flex flex-col items-start px-8 fixed">
          <Link to="/dashboard" className="flex items-center gap-2 mt-3">
            <MdOutlineDashboard className="text-xl" />
            <span>Dashboard</span>
          </Link>
          <Link to="/tasks" className="flex items-center gap-2 mt-4">
            <FaTasks className="text-lg" />
            <span>Tasks</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-2 mt-4">
            <FaRegUser className="text-lg" />
            <span>Profile</span>
          </Link>
          <button
            onClick={() => setLogout(true)}
            className="flex items-center gap-2 mt-4"
          >
            <MdLogout className="text-lg" />
            <span>Log out</span>
          </button>
        </div>
      )}
      <div className=""></div>
    </>
  );
};
export default Header;
