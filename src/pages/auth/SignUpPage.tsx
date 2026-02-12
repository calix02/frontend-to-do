// Libraries
import { Link } from "react-router-dom";

// Assets
import AppLogo from "@/assets/app-logo.svg";

// Icons
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

function RegiterForm() {
  return (
    <div className="w-screen mt-5 px-5">
      <div className="bg-[#ffffff25] fade-in backdrop-blur-xl w-full rounded-xl  shadow-md py-5 z-10">
        <h1 className="poppins-regular text-2xl text-center">Sign Up</h1>
        <div className="w-full px-8 mt-8">
          <div className="relative">
            <FaRegUser className="absolute left-2 top-1/2 text-lg -translate-y-1/2" />
            <input
              type="text"
              className="border-b px-8 py-2 active:border-0 active:outline-0  border-black w-full"
              placeholder="Fullname"
            />
          </div>
          <div className="relative mt-5">
            <FaRegEnvelope className="absolute left-2 top-1/2 text-lg -translate-y-1/2" />
            <input
              type="text"
              className="border-b px-8 py-2 active:border-0 active:outline-0  border-black w-full"
              placeholder="Username"
            />
          </div>
          <div className="relative mt-5">
            <MdOutlineLock className="absolute left-2 top-1/2 text-xl -translate-y-1/2" />

            <input
              type="password"
              className="border-b px-8 py-2 active:border-0 active:outline-0  border-black w-full"
              placeholder="Password"
            />
          </div>
          <div className="relative mt-5">
            <MdOutlineLock className="absolute left-2 top-1/2 text-xl -translate-y-1/2" />

            <input
              type="password"
              className="border-b px-8 py-2 active:border-0 active:outline-0  border-black w-full"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mt-5 poppins-regular ">
            <p className="text-sm">Terms & Condition</p>
          </div>

          <div className="mt-5">
            <button className="w-full h-12 bg-[#A5491B] rounded-lg poppins-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function SignUpPage() {
  return (
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
        <RegiterForm />
        <div className="mb-10 fade-left mt-5 poppins-semibold text-sm px-10 flex items-center gap-2 fade-In">
          <p className="poppins-regular">Already have an account?</p>
          <Link to="/login" className="underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
