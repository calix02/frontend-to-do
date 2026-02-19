// Libraries
import { useEffect, useState } from "react";

// Axios
import { getCompletedTask } from "@/axios/getcompleted";
import { getInProgressTask } from "@/axios/getinprogress";
import { getNotStarted } from "@/axios/getnotstarted";

// Components
import AddTaskModal from "./components/AddTaskModal";
import CompletedTask from "./components/CompletedTask";
import Header from "./components/Header";
import UpdateTaskModal from "./components/UpdateTaskModal";

// Icons
import { BiConfused } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { MdAdd, MdOutlineAssignment } from "react-icons/md";

import { deleteTask } from "@/axios/delete";
import { useAuthStore } from "@/stores/auth/auth.store";
import { MdOutlineAccessTime } from "react-icons/md";
import DeleteTaskModal from "./components/DeleteTaskModal";
import InProgressTask from "./components/InProgressTask";
import NotStartedTask from "./components/NotStartedTask";

interface Task {
  _id: string;
  task: string;
  status: string;
}
function Tasks() {
  const [complete, setComplete] = useState<Task[]>([]);
  const [inProgress, setInProgress] = useState<Task[]>([]);
  const [notStarted, setNotStarted] = useState<Task[]>([]);

  const [loading, setLoading] = useState(true);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);
  const [showInProgress, setShowInProgress] = useState<boolean>(false);
  const [showNotStarted, setShowNotStarted] = useState<boolean>(true);
  const [addTask, setAddTask] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [updateTask, setUpdateTask] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const user = useAuthStore((state) => state.user);

  const [showDelete, setShowDelete] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleDeleteTask = async () => {
    if (!taskToDelete) return;

    try {
      await deleteTask(taskToDelete);

      fetchAllTasks(); // refresh list
      setShowDelete(false);
      setTaskToDelete(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const openDeleteModal = (id: string) => {
    setTaskToDelete(id);
    setShowDelete(true);
  };

  const fetchAllTasks = async () => {
    if (!user?._id) return;

    try {
      setLoading(true);

      const [completedTasks, inProgressTasks, notStartedTasks] =
        await Promise.all([
          getCompletedTask(user._id),
          getInProgressTask(user._id),
          getNotStarted(user._id),
        ]);

      setComplete(completedTasks);
      setInProgress(inProgressTasks);
      setNotStarted(notStartedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllTasks();
  }, [user?._id]);

  if (loading) return <p>Loading...</p>;

  const handleUpdate = (task: Task) => {
    setSelectedTask(task);
    setUpdateTask(true);
  };
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleInProgress = () => {
    setShowCompleted(false);
    setShowNotStarted(false);
    setShowInProgress(true);
  };
  const handleCompleted = () => {
    setShowCompleted(true);
    setShowInProgress(false);
    setShowNotStarted(false);
  };
  const handleNotStarted = () => {
    setShowCompleted(false);
    setShowInProgress(false);
    setShowNotStarted(true);
  };
  const handleAddTask = () => {
    setAddTask(true);
  };
  const handleClose = () => {
    setAddTask(false);
    setUpdateTask(false);
  };

  return (
    <>
      <div className="w-screen h-screen bg-white">
        {addTask && (
          <AddTaskModal refreshTask={fetchAllTasks} handleClose={handleClose} />
        )}
        {updateTask && selectedTask && (
          <UpdateTaskModal
            taskId={selectedTask._id}
            currentTask={selectedTask.task}
            currentStatus={selectedTask.status}
            handleClose={handleClose}
            refreshTasks={fetchAllTasks}
          />
        )}
        {showDelete && (
          <DeleteTaskModal
            handleClose={() => setShowDelete(false)}
            onConfirm={handleDeleteTask}
          />
        )}

        <Header toggle={handleMenu} showMenu={showMenu} />
        <div className="mt-25 w-full pt-8 px-5">
          <div className="flex justify-between">
            <h1 className="poppins-semibold fade-left text-xl text-[#242423]">
              Welcome {user?.name}!
            </h1>
          </div>
          <div className="w-full flex justify-end px-2">
            <button
              onClick={handleAddTask}
              className={`flex items-center fade-right gap-1 bg-[#3DC64540] shadow-[2px_2px_2px_gray]   w-30 h-8 justify-center poppins-semibold text-sm rounded-full`}
            >
              <MdAdd className="text-xl" />
              Add Task
            </button>
          </div>
          <div className="mt-3 fade-in poppins-semibold text-sm text-gray-700 flex gap-3">
            <button
              onClick={handleCompleted}
              className={`flex items-center text-[#3DC64590] justify-center gap-1    px-2 py-1 border-b-2 rounded-2xl border-gray-500 ${showCompleted ? "bg-[#3DC64540] text-gray-700" : "bg-white"} `}
            >
              <FaCheck />
              Completed
            </button>
            <button
              onClick={handleInProgress}
              className={`flex items-center justify-center text-[#FF813D80] gap-1 border-b-2 rounded-2xl border-gray-500 px-2 py-1  shadow-md ${showInProgress ? "bg-[#FF813D40] text-gray-700" : "bg-white"}`}
            >
              <MdOutlineAccessTime />
              In Progress
            </button>
            <button
              onClick={handleNotStarted}
              className={`flex items-center justify-center gap-1 border-b-2 px-2 py-1 text-[#E3525280]  rounded-2xl border-gray-500 shadow-md ${showNotStarted ? "bg-[#E3525240] text-gray-700" : "bg-white"}`}
            >
              <MdOutlineAssignment />
              Not Started
            </button>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3">
            {showCompleted && (
              <div className="w-full  max-h-155 overflow-x-scroll pb-5 flex flex-col gap-3 fade-up">
                {complete.length === 0 ? (
                  <div className="w-full h-20  mt-8 poppins-semibold text-gray-400 flex flex-col gap-2 justify-center items-center ">
                    <BiConfused className="text-6xl" />
                    <p>No Task Found!</p>
                  </div>
                ) : (
                  complete.map((task) => (
                    <CompletedTask key={task._id} task={task.task} />
                  ))
                )}
              </div>
            )}
            {showInProgress && (
              <div className="w-full  max-h-155 overflow-x-scroll pb-5 flex flex-col gap-3 fade-up">
                {inProgress.length === 0 ? (
                  <div className="w-full h-20  mt-8 poppins-semibold text-gray-400 flex flex-col gap-2 justify-center items-center ">
                    <BiConfused className="text-6xl" />
                    <p>No Task Found!</p>
                  </div>
                ) : (
                  inProgress.map((task) => (
                    <InProgressTask
                      key={task._id}
                      task={task.task}
                      handleUpdate={() => handleUpdate(task)}
                      handleDelete={() => openDeleteModal(task._id)}
                    />
                  ))
                )}
              </div>
            )}
            {showNotStarted && (
              <div className="w-full  max-h-155 overflow-x-scroll pb-5 flex flex-col gap-3 fade-up">
                {notStarted.length === 0 ? (
                  <div className="w-full h-20  mt-8 poppins-semibold text-gray-400 flex flex-col gap-2 justify-center items-center ">
                    <BiConfused className="text-6xl" />
                    <p>No Task Found!</p>
                  </div>
                ) : (
                  notStarted.map((task) => (
                    <NotStartedTask
                      key={task._id}
                      task={task.task}
                      handleUpdate={() => handleUpdate(task)}
                      handleDelete={() => openDeleteModal(task._id)}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Tasks;
