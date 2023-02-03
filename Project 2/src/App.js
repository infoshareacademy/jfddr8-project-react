import "./App.css";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { AuthContext } from "./providers/Auth";
import { Login } from "./components/Login/Login";
import { firebaseAuth } from "./firebase";
import {
  setPersistence,
  signInWithRedirect,
  inMemoryPersistence,
  GoogleAuthProvider,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseDb } from "./firebase";
import { collection } from "firebase/firestore";
import { doc, addDoc, set } from "firebase/firestore";

function App() {
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const [basketValue, setBasketValue] = useState(0);

  const addToCart = (productValue) => {
    const pricesRef = collection(firebaseDb, "prices");
    addDoc(pricesRef, {productValue}).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (data) => {
      if (data) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLogged ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/home"
          element={<Home basketValue={basketValue} addToCart={addToCart} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
