import axiosInstance from "@/axios/axios-instance";
import type { AccountType } from "@/types/account/account.type";

export const registerApi = async (data: Partial<AccountType>) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};
export const logInApi = async (data: Partial<AccountType>) => {
  const response = await axiosInstance.post("/auth/login", data);
  const { token, account } = response.data;
  localStorage.setItem("token", token);
  return { account, token };
};
export const logOutApi = async () => {
  await axiosInstance.post("/auth/logout");

  // 🔐 remove token
  localStorage.removeItem("token");
};
