// ProtectedRoute.tsx
import { useAuthStore } from "@/stores/auth/auth.store";
import { Navigate } from "react-router";

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
