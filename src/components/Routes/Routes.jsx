import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home";
import ErrorPage from "../Layout/ErrorPage";
import Login from "../Login";
import Register from "../Register";
import Profile from "../Profile";


  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
          {
              path: "/login",
              element: <Login></Login>  
          },
          {
              path: "/register",
              element: <Register></Register> 
          },
          
          {
              path: "/updateProfile",
              element: <Profile></Profile> 
          },
      ]
    },
  ]);
export default router;