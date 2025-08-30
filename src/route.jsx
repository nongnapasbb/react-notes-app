import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,

  },
  {
    path: "/app",
    element: <App />,
  }
]);