// Icons
import { FaEdit } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

type TaskProps = {
  task: string;
  handleUpdate: () => void;
  handleDelete: () => void;
};
function NotStartedTask({ task, handleUpdate, handleDelete }: TaskProps) {
  return (
    <div className="w-full  pb-5 rounded-2xl px-3 border border-[#e0e0e0] py-2 shadow-md relative flex flex-col justify-center ">
      <div className="flex justify-between mt-2">
        <p className="flex justify-start items-center gap-1 w-full  left-3 top-3 poppins-regular text-xs text-[#E35252]">
          <MdOutlineAssignment className="text-xl" />
          Not Started
        </p>
        <div className="flex items-center justify-end gap-2  w-full">
          <FaEdit onClick={handleUpdate} className="text-[#0D4861] text-lg" />

          <RiDeleteBin5Line
            onClick={handleDelete}
            className=" text-xl text-[#E35252] "
          />
        </div>
      </div>

      <div className="poppins-regular text-[#242423] text-sm mt-2 text-start px-2 indent-3 ">
        {task}
      </div>
    </div>
  );
}
export default NotStartedTask;
