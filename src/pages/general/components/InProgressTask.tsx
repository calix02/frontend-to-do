// Icons
import { FaEdit } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

type TaskProps = {
  task: string;
  handleUpdate: () => void;
};
function InProgressTask({ task, handleUpdate }: TaskProps) {
  return (
    <div className="w-full  pb-5 rounded-2xl px-3 border border-[#e0e0e0] py-2 shadow-md relative flex flex-col justify-center ">
      <div className="flex justify-between mt-2">
        <p className="flex justify-start items-center gap-1 w-full  left-3 top-3 poppins-regular text-xs text-[#FF813D]">
          <IoMdTime className="text-xl" />
          In Progress
        </p>
        <div className="flex items-center justify-end gap-2  w-full">
          <FaEdit onClick={handleUpdate} className="text-[#0D4861] text-xl" />

          <RiDeleteBin5Line className=" text-xl text-[#E35252] right-3 top-3" />
        </div>
      </div>

      <p className="poppins-regular text-[#242423] text-sm mt-2 text-justify px-2 indent-3">
        {task}
      </p>
    </div>
  );
}
export default InProgressTask;
