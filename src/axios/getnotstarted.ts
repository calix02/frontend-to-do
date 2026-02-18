import axiosInstance from "./axios-instance";

export const getNotStarted = async (account_id: string) => {
  const { data } = await axiosInstance.post("/task/getnotstarted", {
    account_id,
    status: "Not started",
  });
  return data.tasks;
};
