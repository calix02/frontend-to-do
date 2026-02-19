// ProtectedRoute.tsx
import { Navigate } from "react-router";
import { useAuthStore } from "@/stores/auth/auth.store";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}