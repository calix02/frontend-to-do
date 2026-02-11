import { FaCheck } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
function CompletedTask() {
  return (
    <div className="w-full h-40 rounded-2xl border border-[#e0e0e0] shadow-md relative">
      <RiDeleteBin5Line className="absolute text-xl text-[#E35252] right-3 top-3" />
      <p className="flex justify-center items-center gap-1 absolute left-3 top-3 poppins-regular text-sm text-[#3dc646b7]">
        <FaCheck />
        Completed
      </p>
    </div>
  );
}
export default CompletedTask;
