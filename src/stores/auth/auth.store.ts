import { create } from "zustand";
import { persist } from "zustand/middleware";
import { logInApi, logOutApi, registerApi } from "@/api/auth/auth.api";
import type { AuthStoreType } from "@/types/auth/auth.type";
import { showError } from "@/utils/error/error.utils";
import toast from "react-hot-toast";

// Zustand store with persistence
export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      loading: false,
      user: null,

      // Register
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

      // Login
      setLogin: async (data) => {
        set({ loading: true });
        try {
          const response = await logInApi(data);
          set({ user: response.account }); // Update store
          toast.success(response.message);
          return true;
        } catch (error) {
          showError(error);
          return false;
        } finally {
          set({ loading: false });
        }
      },

      // Logout
      logout: async () => {
        set({ loading: true });
        try {
          await logOutApi();
          set({ user: null }); // Clear store
          toast.success("Logged out successfully!");
          return true;
        } catch (error) {
          showError(error);
          return false;
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "auth-storage", // localStorage key
     // getStorage: () => localStorage, // optional
    }
  )
);