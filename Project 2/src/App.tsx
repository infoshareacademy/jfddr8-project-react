import "./App.css";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import { useState, useEffect, useContext } from "react";
import ShoppingCartContext from "./Context/ShoppingCartContext";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Context/Auth";
import { auth } from "../src/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../src/firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";

function App() {
  const [price, setPrice] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  // const { setIsLogged } = useContext(Auth);
  // const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLogged(true);
        // navigate("/home");
        console.log(user);
        try {
          const cartValueSnapShot = await getDoc(
            doc(db, "Koszyk", "${user.email}")
          );
          if (cartValueSnapShot.exists()) {
            const { CartValue } = cartValueSnapShot.data();
            setPrice(CartValue);
          } else setPrice(0);
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsLogged(false);
        // navigate("/login");
        console.log("niezalogowany");
      }
    });
  }, [setIsLogged]);

  return (
    <div>
      <BrowserRouter>
        <ShoppingCartContext.Provider value={{ price, setPrice }}>
          <Auth.Provider value={{ isLogged, setIsLogged }}>
            <Routes>
              <Route
                path="/"
                element={
                  isLogged ? <Navigate to="/home" /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/login"
                element={isLogged ? <Navigate to="/home" /> : <Login />}
              />
              <Route
                path="/home"
                element={isLogged ? <Home /> : <Navigate to="/login" />}
              />
            </Routes>
          </Auth.Provider>
        </ShoppingCartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
