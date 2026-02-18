import axiosInstance from "./axios-instance";
export const updateTask = async (
  id: string,
  task: string,
  status: string
) => {
  const { data } = await axiosInstance.put(`/task/update/${id}`, {
    task,
    status,
  });

  return data;
};
