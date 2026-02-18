import axiosInstance from "./axios-instance";

export const deleteTask = async (id: string) => {
  const { data } = await axiosInstance.delete(`/task/delete/${id}`);
  return data;
};
