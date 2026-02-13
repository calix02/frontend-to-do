import axiosInstance from "@/axios/axios-instance";
import type { AccountType } from "@/types/account/account.type";

export const registerApi = async (data: Partial<AccountType>) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};
export const logInApi = async (data: Partial<AccountType>) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};
export const logOutApi = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};
