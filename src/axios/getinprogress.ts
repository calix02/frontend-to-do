import axiosInstance from "./axios-instance";

export const getInProgressTask = async (account_id: string) => {
  const { data } = await axiosInstance.post("/task/getinprogress", {
    account_id,
    status: "In Progress",
  });
  return data.tasks;
};
