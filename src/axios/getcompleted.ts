import axiosInstance from "./axios-instance";

export const getCompletedTask = async (account_id: string) => {
  const { data } = await axiosInstance.post("/task/getcompleted", {
    account_id,
    status: "Completed",
  });
  return data.tasks;
};
