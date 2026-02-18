import axiosInstance from "./axios-instance";

export const addTask = async (task: string, account_id: string) => {
  const { data } = await axiosInstance.post("/task/add", {
    task,
    account_id,
    status: "Not started",
  });

  return data;
};
