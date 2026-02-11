import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import CompletedTask from "./components/CompletedTask";
import Header from "./components/Header";
function CompletedContent() {
  return (
    <div className="w-full">
      <CompletedTask />
    </div>
  );
}
function Tasks() {
  const [showCompleted, setShowCompleted] = useState(true);

  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const clickedInProgress = () => {
    setShowCompleted(false);
  };
  const clickedCompleted = () => {
    setShowCompleted(true);
  };
  return (
    <div className="w-screen h-screen  bg-white">
      <Header toggle={handleMenu} showMenu={showMenu} />
      <div className="mt-25 w-full pt-8 px-5">
        <div className="flex justify-between">
          <h1 className="poppins-semibold fade-left text-xl text-[#242423]">
            Manage your Task!
          </h1>
          <button className="flex items-center gap-1 bg-[#3DC64540] w-30 h-8 justify-center poppins-semibold text-sm rounded-md">
            <MdAdd />
            Add Task
          </button>
        </div>
        <div className="mt-3 poppins-semibold text-sm flex gap-3">
          <button
            onClick={clickedCompleted}
            className="flex items-center border-design justify-center gap-1  px-2 py-1 border shadow-md bg-[#3DC64540]"
          >
            <FaCheck />
            Completed
          </button>
          <button
            onClick={clickedInProgress}
            className="flex items-center justify-center gap-1 border px-2 py-1 border-design shadow-md bg-white"
          >
            <FaCheck />
            In Progress
          </button>
          <button className="flex items-center justify-center gap-1 border px-2 py-1 border-design shadow-md bg-white">
            <FaCheck />
            Completed
          </button>
        </div>

        <div className="mt-5 flex flex-col items-center gap-3">
          {showCompleted && CompletedContent()}
        </div>
      </div>
    </div>
  );
}
export default Tasks;
