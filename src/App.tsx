// Libraries
import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import LogInPage from "./pages/auth/LogInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Dashboard from "./pages/general/Dashboard";
import Tasks from "./pages/general/TasksPage";
import LandingPage from "./pages/splashscreen/LandingPage";
import { Toaster } from "react-hot-toast";
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

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
