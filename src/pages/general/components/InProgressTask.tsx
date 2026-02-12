// Icons
import { FaCheck } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
type TaskProps = {
  task: string;
  date: string;
};
function CompletedTask({ task, date }: TaskProps) {
  return (
    <div className="w-full h-45 rounded-2xl border border-[#e0e0e0] shadow-md relative flex justify-center items-center">
      <span className="absolute top-3 right-10 poppins-regular text-xs text-gray-500">
        {date}
      </span>
      <RiDeleteBin5Line className="absolute text-xl text-[#E35252] right-3 top-3" />
      <p className="flex justify-center items-center gap-1 absolute left-3 top-3 poppins-regular text-sm text-[#FF813D]">
        <MdOutlineAccessTime />
        In Progress
      </p>
      <p className="poppins-regular text-[#242423] text-sm px-3">{task}</p>
      <div className="absolute bottom-3 w-full flex gap-3 px-4 text-sm poppins-semibold">
        <button className="bg-[#3DC64540] w-full h-9 border-design flex justify-center items-center gap-2">
          <FaCheck className="text-lg text-[#3DC645]" />
          Completed
        </button>
        <button className="bg-[#3D9DC635] w-full h-9 border-design flex justify-center items-center gap-2">
          <FiEdit className="text-lg text-[#0D4861]" />
          Update
        </button>
      </div>
    </div>
  );
}
export default CompletedTask;
