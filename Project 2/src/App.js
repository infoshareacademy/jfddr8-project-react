import "./App.css";
import Home from "./components/Home";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import { LoginContext } from "./providers/Auth";
import { useContext } from "react";

function App() {
  const loginState = useContext(LoginContext);
  const isLoggedIn =
    loginState !== undefined &&
    loginState !== null &&
    loginState.isLoggedIn === true;

  const router = createBrowserRouter([
    {
      path: "/",
      loader: () => {
        return isLoggedIn ? redirect("/home") : redirect("/login");
      },
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
