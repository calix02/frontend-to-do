import { useState } from "react";
import { updateTask } from "@/axios/update";

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
      <div className="w-70 h-65 rounded-md shadow-md bg-white flex flex-col justify-center relative items-center">
        <form className="w-full px-3 mt-3" onSubmit={handleSubmit}>
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full h-20 border border-[#e0e0e0] px-3 py-2 rounded-lg shadow-md"
          />
          <select onChange={(e) => setStatus(e.target.value)} name="" id="">
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
