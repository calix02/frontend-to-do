// Store

// Axios

// Assets
import AppLogo from "@/assets/app-logo.svg";
import { FaQuestionCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
type ModalProps = {
  handleClose: () => void;
  onConfirm: () => void;
};
function DeleteTaskModal({ handleClose, onConfirm }: ModalProps) {
  return (
    <div className="bg-[#0000006e] fade-in inset-0 flex justify-center fixed  z-30 items-center">
      <div className="w-70 h-65  rounded-md shadow-md bg-white flex flex-col justify-center relative items-center">
        <IoClose
          onClick={handleClose}
          className="absolute right-2 text-xl top-2"
        />
        <img
          src={AppLogo}
          className="w-20 absolute top-1/4 opacity-80 -translate-y-1/2"
          alt="App Logo"
        />
        <h1 className="playfair-bold text-3xl z-10 mt-10">App To Do</h1>
        <FaQuestionCircle className="text-5xl mt-3 text-[#A5491B] border rounded-full border-black" />
        <p className="poppins-regular text-xs mt-2">
          Are you sure you want to delete this task?
        </p>
        <div className="flex w-full px-3 gap-3 text-sm poppins-semibold mt-5">
          <button
            onClick={onConfirm}
            className="w-full h-10 rounded-2xl bg-[#A5491B] text-white shadow-md"
          >
            Yes
          </button>
          <button
            onClick={handleClose}
            className="w-full h-10 rounded-2xl shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteTaskModal;
