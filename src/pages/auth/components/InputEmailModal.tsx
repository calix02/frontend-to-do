// Assets
import AppLogo from "@/assets/app-logo.svg";
import { FaRegEnvelope } from "react-icons/fa";

import { IoClose } from "react-icons/io5";

function InputEmailModal() {
  return (
    <div className="bg-[#0000006e] fade-in inset-0 flex justify-center fixed  z-30 items-center">
      <div className="w-70 h-65  rounded-md shadow-md bg-white flex flex-col justify-center relative items-center">
        <IoClose className="absolute right-2 text-xl top-2" />
        <img
          src={AppLogo}
          className="w-20 absolute top-1/4 opacity-80 -translate-y-1/2"
          alt="App Logo"
        />
        <h1 className="playfair-bold text-3xl z-10 mt-10">App To Do</h1>
        <form className="w-full px-3 mt-3">
          <div className="relative">
            <FaRegEnvelope className="absolute left-2 top-1/2 text-lg -translate-y-1/2" />
            <input
              type="text"
              name="email"
              className="peer border-b px-8 py-3 focus:outline-none focus:ring-0 border-black w-full"
              placeholder=""
              required
            />
            <label
              className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-500
                        transition-all duration-200
                        peer-focus:top-1 peer-valid:top-1 peer-valid:text-sm peer-focus:text-sm peer-focus:text-gray-600
                         "
            >
              Email
            </label>
          </div>

          <button
            type="submit"
            className="poppins-semibold text-sm mt-3 h-10 w-full text-white bg-[#A5491B] rounded-lg"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}
export default InputEmailModal;
