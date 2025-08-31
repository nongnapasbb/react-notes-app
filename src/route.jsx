import { createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,

  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);