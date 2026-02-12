// Libraries
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import AuthenticatedModal from "./components/AuthenticatedModal";

// Assets
import AppLogo from "@/assets/app-logo.svg";

function LogInPage() {
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);

  const handleLogIn = () =>{
    setValid(true);
  }

  useEffect(() => {
    if (valid) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      {valid && <AuthenticatedModal />}

      <div className="w-screen h-screen bg-linear-to-br from-[#FFFFFF] to-[#FFE7B4] flex  justify-center items-center relative">
        <img
          src={AppLogo}
          className="w-60 fade-down absolute top-1/6 -translate-y-1/2"
          alt="App Logo"
        />
        <div className="flex flex-col justify-center fade-In">
          <h1 className="playfair-bold text-5xl text-center z-10 fade-in">
            To Do App
          </h1>
          <div className="w-screen mt-5 px-5">
            <div className="bg-[#ffffff25] fade-in backdrop-blur-xl w-full rounded-xl pt-5 shadow-md h-80 z-10">
              <h1 className="poppins-regular text-2xl text-center">Log In</h1>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleLogIn();
                }} 
                className="w-full px-8 mt-8">
                <div className="relative">
                  <FaRegEnvelope className="absolute left-2 top-1/2 text-lg -translate-y-1/2" />
                  <input
                    type="text"
                    className="peer focus:outline-none focus:ring-0 border-b px-8 py-3 active:border-0 active:outline-0  border-black w-full"
                    placeholder=""
                    required
                  />
                   <label
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
               peer-valid:top-1 peer-valid:text-sm"
                >
                  Username
                </label>
                </div>
                <div className="relative mt-5">
                  <MdOutlineLock className="absolute left-2 top-1/2 text-xl -translate-y-1/2" />

                  <input
                    type="password"
                    className="peer border-b px-8 py-3 focus:outline-none focus:ring-0   border-black w-full"
                    placeholder=""
                    required
                  />
                   <label
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
               peer-valid:top-1 peer-valid:text-sm"
                >
                  Password
                </label>
                </div>

                <div className="mt-5 poppins-regular flex justify-between">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" />
                    <label htmlFor="" className="text-sm">
                      Remember Me
                    </label>
                  </div>
                  <p className="text-sm">Forgot Password?</p>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#A5491B] rounded-lg poppins-semibold text-white"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mb-10 fade-left mt-5 poppins-semibold text-sm px-10 flex items-center gap-2 fade-In">
            <p className="poppins-regular">Don't have an account?</p>
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default LogInPage;
