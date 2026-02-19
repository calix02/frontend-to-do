// Libraries
import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import { Toaster } from "react-hot-toast";
import LogInPage from "./pages/auth/LogInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Profile from "./pages/general/Profile";
import Tasks from "./pages/general/TasksPage";
import LandingPage from "./pages/splashscreen/LandingPage";
import ProtectedRoute from "./router/ProtectedRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: LandingPage,
    },
    {
      path: "/login",
      Component: LogInPage,
    },
    {
      path: "/signup",
      Component: SignUpPage,
    },

    {
      path: "/tasks",
      Component: () => (
        <ProtectedRoute>
          <Tasks />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      Component: () => (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
