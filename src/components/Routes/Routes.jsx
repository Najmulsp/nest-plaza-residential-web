import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home";
import ErrorPage from "../Layout/ErrorPage";
import Login from "../Login";
import Register from "../Register";
import Profile from "../Profile";
import Properties from "../PrivetRoute/Properties";
import ProtectedProperty from "../PrivetRoute/ProtectedProperty";
import ProtectedProfile from "../PrivetRoute/ProtectedProfile";


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
         loader: ({params}) => fetch(`/Estate.json/${params.id}`),
        element: <ProtectedProperty><Properties></Properties></ProtectedProperty>,
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
        element: <ProtectedProfile><Profile></Profile></ProtectedProfile>,
      },
    ],
  },
]);
export default router;
