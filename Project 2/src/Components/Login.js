import React, { useState, useContext } from "react";
import { LoginStatus } from "../providers/Auth";

function Login() {
  const [login, setLogin] = useState("");
  const { setIsLogged } = useContext(LoginStatus);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", login);
    setIsLogged(true);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="login"
        id="login"
        placeholder="login"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
