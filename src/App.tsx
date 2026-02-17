// Libraries
import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import { Toaster } from "react-hot-toast";
import LogInPage from "./pages/auth/LogInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Tasks from "./pages/general/TasksPage";
import LandingPage from "./pages/splashscreen/LandingPage";
import ProtectedRoute from "./pages/general/components/ProtectedRoute";
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
      Component: () =>(
        <ProtectedRoute>
          <Tasks/>
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
