import { createBrowserRouter } from "react-router-dom";
import Users from "./views/Users";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Notfound from "./views/Notfound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigator to='/users' />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);

export default router;
