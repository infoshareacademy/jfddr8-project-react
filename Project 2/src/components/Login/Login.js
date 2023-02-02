import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please provide user credentials");
    } else {
      try {
        await createUserWithEmailAndPassword(firebaseAuth, username, password);
        setIsLogged(true);
      } catch (error) {
        console.log(error);
        signInWithEmailAndPassword(firebaseAuth, username, password).then(
          (userCredential) => {
            const user = userCredential.user;
            navigate("/home");
            console.log(user);
            setIsLogged(true);
          }
        );
      }
    }
  };

  return (
    <>
      <h1>Please log in:</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Login:</label>
        <br />
        <input
          name="login"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          name="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Log in" />
      </form>
    </>
  );
};
