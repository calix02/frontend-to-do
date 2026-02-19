import ProtectedRoute from "@/router/ProtectedRoute";
import Tasks from "@/pages/general/TasksPage";

export default function TasksRoute() {
  return (
    <ProtectedRoute>
      <Tasks />
    </ProtectedRoute>
  );
}