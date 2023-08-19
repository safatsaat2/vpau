import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import DashboardLayout from "../Page/DashBoardLayout/DashboardLayout";

export const  routes = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "dashboard",
      element:<DashboardLayout/>
    }
  ]);