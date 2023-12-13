import { createBrowserRouter } from "react-router-dom";
import Users from "./views/Users";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Notfound from "./views/Notfound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default router;
