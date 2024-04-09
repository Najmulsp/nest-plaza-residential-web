import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home";
import ErrorPage from "../Layout/ErrorPage";
import Login from "../Login";
import Register from "../Register";
import Profile from "../Profile";
import Properties from "../PrivetRoute/Properties";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Estate.json')
      },
      {
        path: "/estate/:id",
        // loader: ({params}) => fetch(`./Estate.json/${params.id}`),
        element: <Properties></Properties>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/updateProfile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
export default router;
