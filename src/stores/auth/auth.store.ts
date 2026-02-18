import { logInApi, logOutApi, registerApi } from "@/api/auth/auth.api";
import type { AuthStoreType } from "@/types/auth/auth.type";
import { showError } from "@/utils/error/error.utils";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      loading: false,
      user: null,

      setRegister: async (data) => {
        set({ loading: true });
        try {
          const response = await registerApi(data);
          toast.success(response.message);
          return true;
        } catch (error) {
          showError(error);
          return false;
        } finally {
          set({ loading: false });
        }
      },

      setLogin: async (data) => {
        set({ loading: true });
        try {
          const response = await logInApi(data);

          set({
            user: response.account,
            loading: false,
          });

          toast.success(response.message);
          return true;
        } catch (error) {
          showError(error);
          set({ loading: false });
          return false;
        }
      },

      logout: async () => {
        set({ loading: true });
        try {
          await logOutApi();

          set({
            user: null,
            loading: false,
          });

          toast.success("Logged out successfully!");
          return true;
        } catch (error) {
          showError(error);
          set({ loading: false });
          return false;
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : noopStorage,
      ),
      partialize: (state) => ({
        user: state.user,
      }),
    },
  ),
);
