import { createBrowserRouter, RouterProvider } from "react-router";
import LogInPage from "./pages/auth/LogInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Tasks from "./pages/TasksPage";
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
      path: "/dashboard",
      Component: Dashboard,
    },
    {
      path: "/tasks",
      Component: Tasks,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
