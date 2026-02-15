// Icons
import { FaCheck } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

type TaskProps = {
  task: string;
  date: string;
};
function CompletedTask({ task, date }: TaskProps) {
  return (
    <div className="w-full min-h-40 pb-5 rounded-2xl px-3 border border-[#e0e0e0] py-2 shadow-md relative flex flex-col justify-center ">
      <div className="flex justify-between">
        <p className="flex justify-start items-center gap-1 w-full  left-3 top-3 poppins-regular text-sm text-[#3dc646b7]">
          <FaCheck />
          Completed
        </p>
        <div className="flex items-center justify-end gap-2  w-full">
          <span className=" top-3 right-10 poppins-regular text-xs text-gray-500">
            {date}
          </span>
          <RiDeleteBin5Line className=" text-xl text-[#E35252] right-3 top-3" />
        </div>
      </div>

      <p className="poppins-regular text-[#242423] text-sm mt-2 text-justify px-2 indent-3">
        {task}
      </p>
    </div>
  );
}
export default CompletedTask;
