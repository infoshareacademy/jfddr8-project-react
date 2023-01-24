import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../providers/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useContext(LoginContext);
  const isLoggedIn =
    loginState !== undefined &&
    loginState !== null &&
    loginState.isLoggedIn === true;

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/home"></Navigate>
      ) : (
        <form>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            label="hasło"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="logIn" onClick={() => loginState.logIn(email)}>
            Log in
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
