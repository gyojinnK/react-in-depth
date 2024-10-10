import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);
