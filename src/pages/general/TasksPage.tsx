// Libraries
import { useState } from "react";

// Components
import AddTaskModal from "./components/AddTaskModal";
import CompletedTask from "./components/CompletedTask";
import Header from "./components/Header";
import InProgressTask from "./components/InProgressTask";
import NotStartedTask from "./components/NotStartedTask";
import UpdateTaskModal from "./components/UpdateTaskModal";

// Icons
import { FaCheck } from "react-icons/fa6";
import { MdAdd, MdOutlineAssignment } from "react-icons/md";

import { MdOutlineAccessTime } from "react-icons/md";

function CompletedContent() {
  type Task = {
    task: string;
    date: string;
  };
  const tasks: Task[] = [
    {
      task: "Take a  ratione voluptatibus eveniet sunt, perspiciatis cumque labore fugiat molestias, harum necessitatibus dignissimos ea quis sit quia aut ullam assumenda..",
      date: "02/10/2026",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-3 fade-up">
      {tasks.map((t, id) => (
        <CompletedTask key={id} task={t.task} date={t.date} />
      ))}
    </div>
  );
}

function NotStartedContent() {
  return (
    <div className="w-full flex flex-col gap-3 fade-up">
      <NotStartedTask
        task="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date="02/13/2026"
      />
      <NotStartedTask
        task="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date="02/13/2026"
      />
      <NotStartedTask
        task="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        date="02/13/2026"
      />
    </div>
  );
}

function Tasks() {
  const [showCompleted, setShowCompleted] = useState<boolean>(true);
  const [showInProgress, setInProgress] = useState<boolean>(false);
  const [showNotStarted, setShowNotStarted] = useState<boolean>(false);
  const [addTask, setAddTask] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [updateTask, setUpdateTask] = useState<boolean>(false);
  const handleUpdate = () => {
    setUpdateTask(true);
  };
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleInProgress = () => {
    setShowCompleted(false);
    setShowNotStarted(false);
    setInProgress(true);
  };
  const handleCompleted = () => {
    setShowCompleted(true);
    setInProgress(false);
    setShowNotStarted(false);
  };
  const handleNotStarted = () => {
    setShowCompleted(false);
    setInProgress(false);
    setShowNotStarted(true);
  };
  const handleAddTask = () => {
    setAddTask(true);
  };
  const handleClose = () => {
    setAddTask(false);
  };

  return (
    <>
      <div className="w-screen h-screen  bg-white">
        {addTask && <AddTaskModal handleClose={handleClose} />}
        {updateTask && <UpdateTaskModal handleClose={handleClose} />}

        <Header toggle={handleMenu} showMenu={showMenu} />
        <div className="mt-25 w-full pt-8 px-5">
          <div className="flex justify-between">
            <h1 className="poppins-semibold fade-left text-xl text-[#242423]">
              Manage your Task!
            </h1>
            <button
              onClick={handleAddTask}
              className={`flex items-center fade-right gap-1 bg-[#3DC64540]   w-30 h-8 justify-center poppins-semibold text-sm rounded-md`}
            >
              <MdAdd />
              Add Task
            </button>
          </div>
          <div className="mt-3 fade-in poppins-semibold text-sm flex gap-3">
            <button
              onClick={handleCompleted}
              className={`flex items-center border-design justify-center gap-1  px-2 py-1 border shadow-md ${showCompleted ? "bg-[#3DC64540]" : "bg-white"} `}
            >
              <FaCheck />
              Completed
            </button>
            <button
              onClick={handleInProgress}
              className={`flex items-center justify-center gap-1 border px-2 py-1 border-design shadow-md ${showInProgress ? "bg-[#FF813D40]" : "bg-white"}`}
            >
              <MdOutlineAccessTime />
              In Progress
            </button>
            <button
              onClick={handleNotStarted}
              className={`flex items-center justify-center gap-1 border px-2 py-1 border-design shadow-md ${showNotStarted ? "bg-[#E3525240]" : "bg-white"}`}
            >
              <MdOutlineAssignment />
              Not Started
            </button>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3">
            {showCompleted && CompletedContent()}
            {showInProgress && (
              <div className="w-full flex flex-col gap-3 fade-up">
                <InProgressTask
                  handleUpdate={handleUpdate}
                  task="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  date="02/13/2026"
                />
              </div>
            )}
            {showNotStarted && NotStartedContent()}
          </div>
        </div>
      </div>
    </>
  );
}
export default Tasks;
