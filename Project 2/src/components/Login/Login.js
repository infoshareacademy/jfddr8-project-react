import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseDb } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { UserContext } from "../../providers/User";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const data = { price: 0 };
  const { user, setUser } = useContext(UserContext);

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
        await createUserWithEmailAndPassword(
          firebaseAuth,
          username,
          password
        ).then((cred) => {
          setIsLogged(true);
          setDoc(doc(firebaseDb, "Users", cred.user.uid), {});

          setUser(cred.user.uid);
          
        });
      } catch (error) {
        console.log(error.message);
        if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          alert("hasło musi mieć co najmniej 6 znaków");
        } else {
          signInWithEmailAndPassword(firebaseAuth, username, password).then(
            (userCredential) => {
              const user = userCredential.user;
              console.log(user);
              setIsLogged(true);
            }
          );
        }
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
