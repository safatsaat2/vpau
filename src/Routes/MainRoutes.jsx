import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import DashboardLayout from "../Page/DashBoardLayout/DashboardLayout";
import DashHome from "../Page/Dashboard/DashHome";

export const  routes = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/dashboard",
      element:<DashboardLayout/>,
      children: [
        {
          path: "/dashboard",
          element:<DashHome/>
        }
      ]
    
    }
  ]);