import { updateTask } from "@/axios/update";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

import AppLogo from "@/assets/app-logo.svg";

type ModalProps = {
  handleClose: () => void;
  taskId: string;
  currentTask: string;
  currentStatus: string;
  refreshTasks: () => Promise<void>;
};

function UpdateTaskModal({
  handleClose,
  taskId,
  currentTask,
  currentStatus,
  refreshTasks,
}: ModalProps) {
  const [task, setTask] = useState(currentTask);
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateTask(taskId, task, status);
      refreshTasks();

      handleClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0000006e] fade-in inset-0 flex justify-center fixed z-30 items-center">
      <div className="w-70 h-85 rounded-md shadow-md bg-white flex flex-col justify-center relative items-center">
        <IoClose
          onClick={handleClose}
          className="absolute right-2 text-xl top-2"
        />
        <img
          src={AppLogo}
          className="w-20 absolute top-1/4 opacity-80 -translate-y-1/2"
          alt="App Logo"
        />
        <h1 className="playfair-bold text-3xl z-10 mt-20">App To Do</h1>

        <form
          className="w-full px-3 mt-3 poppins-regular"
          onSubmit={handleSubmit}
        >
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full h-20  border text-sm px-3 py-2 rounded-lg shadow-md"
          />
          <select
            className="text-sm w-30 h-8 rounded-xl border pl-3"
            onChange={(e) => setStatus(e.target.value)}
            name=""
            id=""
          >
            <option value={status}>--Status--</option>
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="mt-3 h-10 w-full text-white bg-[#A5491B] rounded-lg"
          >
            {loading ? "Updating..." : "Update Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTaskModal;
