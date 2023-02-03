import React, { useContext, useEffect, useState } from "react";
import Auth from "../Context/Auth";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Navigate } from "react-router";
//import { firebaseAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login(): JSX.Element {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // robie to ponizej bo chce pobrać i zmienić stan( pobieram kontekst Auth  z APP.js)
  const { setIsLogged } = useContext(Auth);
  const signIn = async (): Promise<void> => {
    try {
      await signInWithEmailAndPassword;
      setIsLogged(true);
    } catch {}
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, login, password);
      setIsLogged(true);
    } catch ({ code }) {
      if (code === "auth/email-already-in-use") {
        signIn();
      }
      console.log(code);
    }
  };

  function UpdateLogin(event: React.FormEvent<HTMLInputElement>) {
    setLogin((event.target as HTMLInputElement).value);
  }

  function UpdatePassword(event: React.FormEvent<HTMLInputElement>) {
    setPassword((event.target as HTMLInputElement).value);
  }

  // function Button() {
  //   console.log(login, password);
  //   localStorage.setItem("user", login);
  //   // jak się zapisze user i login to jestesmy zalogowani setIs Logged
  //   setIsLogged(true);
  //   setLogin("");
  //   setPassword("");
  //   console.log(localStorage.getItem("user"));
  // }

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
      <button onClick={handleSubmit}>Log in</button>
    </div>
  );
}

export default Login;
