// Libraries
import { Link, useNavigate } from "react-router-dom";

// Stores
import { useAuthStore } from "@/stores/auth/auth.store";

// Assets
import AppLogo from "@/assets/app-logo.svg";

// Icons
import type { AccountType } from "@/types/account/account.type";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

function RegiterForm() {
  const loading = useAuthStore((state) => state.loading);
  const setRegister = useAuthStore((state) => state.setRegister);

  const [form, setForm] = useState<Partial<AccountType>>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form: ", form);
    if (form.password !== form.confirm) {
      return toast.error("Hindi equal and password");
    }
    const success = await setRegister(form);
    if (success) {
      navigate("/login");
    }
  };
  return (
    <form onSubmit={submitForm} className="w-screen mt-5 px-5">
      <div className="bg-[#ffffff25] fade-in backdrop-blur-sm w-full rounded-xl  shadow-md py-5 z-10">
        <h1 className="poppins-regular text-2xl text-center">Sign Up</h1>
        <div className="w-full px-8 mt-8">
          <div className="relative">
            <FaRegUser className="absolute left-2 top-1/2 text-lg -translate-y-1/2" />
            <input
              type="text"
              name="name"
              onChange={handleChange}
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
              name="email"
              onChange={handleChange}
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
              name="password"
              onChange={handleChange}
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
              name="confirm"
              onChange={handleChange}
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
            <button
              disabled={loading}
              type="submit"
              className="w-full h-12 bg-[#A5491B] rounded-lg poppins-semibold text-white"
            >
              {loading ? "Loading..." : "Register"}
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
