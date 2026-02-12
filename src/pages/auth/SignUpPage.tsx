// Libraries
import { Link } from "react-router-dom";

// Assets
import AppLogo from "@/assets/app-logo.svg";

// Icons
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

function RegiterForm() {
  return (
    <form className="w-screen mt-5 px-5">
      <div className="bg-[#ffffff25] fade-in backdrop-blur-sm w-full rounded-xl  shadow-md py-5 z-10">
        <h1 className="poppins-regular text-2xl text-center">Sign Up</h1>
        <div className="w-full px-8 mt-8">
          <div className="relative">
            <FaRegUser className="absolute left-2 top-1/2 text-lg -translate-y-1/2" />
             <input
                    type="text"
                    className="peer border-b px-8 py-3 focus:outline-none focus:ring-0 border-black w-full"
                    placeholder=""
                    required
                  />
                   <label
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
               peer-valid:top-1 peer-valid:text-sm"
                >
                  Fullname
                </label>
          </div>
          <div className="relative mt-5">
            <FaRegEnvelope className="absolute left-2 top-1/2 text-lg -translate-y-1/2" />
             <input
                    type="email"
                    className="peer focus:outline-none focus:ring-0 border-b px-8 py-3   border-black w-full"
                    placeholder=""
                    required
                  />
            <label
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
               peer-valid:top-1 peer-valid:text-sm "
                >
                  Email
                </label>
          </div>
          <div className="relative mt-5">
            <MdOutlineLock className="absolute left-2 top-1/2 text-xl -translate-y-1/2" />

           <input
                    type="password"
                    className="peer border-b px-8 py-3 focus:outline-none focus:ring-0 border-black w-full"
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
          <div className="relative mt-5">
            <MdOutlineLock className="absolute left-2 top-1/2 text-xl -translate-y-1/2" />

            <input
                    type="password"
                    className="peer border-b px-8 py-3 focus:outline-none focus:ring-0 border-black w-full"
                    placeholder=""
                    required
                  />
                   <label
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600
               peer-valid:top-1 peer-valid:text-sm"
                >
                  Confirm Password
                </label>
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
    </form>
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
