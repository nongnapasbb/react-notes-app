import { createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,

  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);