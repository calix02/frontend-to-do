import ProtectedRoute from "@/router/ProtectedRoute";
import Profile from "@/pages/general/Profile";

export default function ProfileRoute() {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
}