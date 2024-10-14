import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/pages/HomePage";
import ErrorPage from "../components/templates/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }],
    errorElement: <ErrorPage />,
  },
]);
