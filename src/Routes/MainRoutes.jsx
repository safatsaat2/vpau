import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";

export const  routes = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
  ]);