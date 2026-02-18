// Icons
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

type TaskProps = {
  task: string;
  handleUpdate: () => void;
  handleClose: () => void;
};
function NotStartedTask({ task, handleUpdate, handleClose }: TaskProps) {
  return (
    <div className="w-full  pb-5 rounded-2xl px-3 border border-[#e0e0e0] py-2 shadow-md relative flex flex-col justify-center ">
      <div className="flex justify-between mt-2">
        <p className="flex justify-start items-center gap-1 w-full  left-3 top-3 poppins-regular text-xs text-[#E35252]">
          <MdOutlineAssignment className="text-xl" />
          Not Started
        </p>
        <div className="flex items-center justify-end gap-2  w-full">
          <RiDeleteBin5Line onClick={handleClose} className=" text-xl text-[#E35252] right-3 top-3" />
        </div>
      </div>

      <p className="poppins-regular text-[#242423] text-sm mt-2 text-justify px-2 indent-3">
        {task}
      </p>
      <div className="flex gap-3 mt-3 poppins-semibold text-xs">
        <button className="w-full  h-8 flex justify-center items-center gap-1 border-design bg-[#3DC64535]">
          <FaCheck className="text-[#3DC645] text-xl" />
          Complete
        </button>
        <button onClick={handleUpdate} className="w-full h-8 flex gap-1 items-center justify-center border-design bg-[#3D9DC635]">
          <FaEdit className="text-[#0D4861] text-xl" />
          <span>Update</span>
        </button>
        <button className="w-full h-8 flex gap-2 items-center justify-center border-design bg-[#FF813D40]">
          <span>Start</span>
        </button>
      </div>
    </div>
  );
}
export default NotStartedTask;
