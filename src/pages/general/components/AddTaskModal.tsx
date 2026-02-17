// Assets
import AppLogo from "@/assets/app-logo.svg";
import { IoClose } from "react-icons/io5";
type ModalProps = {
  handleClose: () => void;
};
function AddTaskModal({ handleClose }: ModalProps) {
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
        <form className="w-full px-3 mt-3">
          <textarea
            className="w-full h-20 border border-[#e0e0e0] px-3 py-2 flex items-start rounded-lg shadow-md"
            name=""
            id=""
          ></textarea>

          <button className="poppins-semibold text-sm mt-3 h-10 w-full text-white bg-[#A5491B] rounded-lg">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddTaskModal;
