import React, { useState, useContext } from "react";
import { LoginStatus } from "../Providers/Auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";

function Login(): JSX.Element {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLogged } = useContext(LoginStatus);

  const signIn = async ():Promise<void>=>{
    try {
      await signInWithEmailAndPassword(auth, login, password);
      setIsLogged(true);
    } catch (error){
      console.log(error)
    }
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const {user} = await createUserWithEmailAndPassword(auth, login, password);
    
      setIsLogged(true);
    } catch ({ code }) {
      if (code === "auth/email-already-in-use") {
        signIn();
      } else {
        console.log(code);
      }
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="login"
        id="login"
        placeholder="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
