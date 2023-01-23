import { useContext, useEffect, useState } from "react";
import Auth from "../Context/Auth";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // robie to ponizej bo chce pobrać i zmienić stan( pobieram kontekst Auth  z APP.js)
  const [isLogged, setIsLogged] = useContext(Auth);
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setIsLogged(true);
    }
  }, []);

  function UpdateLogin(event) {
    setLogin(event.target.value);
  }

  function UpdatePassword(event) {
    setPassword(event.target.value);
  }

  function Button() {
    console.log(login, password);
    localStorage.setItem("user", login);
    // jak się zapisze user i login to jestesmy zalogowani setIs Logged
    setIsLogged(true);
    setLogin("");
    setPassword("");
    console.log(localStorage.getItem("user"));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Wpisz swój login"
        onChange={UpdateLogin}
        id="login"></input>
      <input
        type="password"
        placeholder="wpisz hasło"
        onChange={UpdatePassword}
        id="password"></input>
      <button onClick={Button}>Log in</button>
    </div>
  );
}

export default Login;
