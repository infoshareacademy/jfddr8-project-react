import "./App.css";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { LoginStatus } from "./Providers/Auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";

function App() {
  const { isLogged, setIsLogged } = useContext(LoginStatus);
  const [userName, setUserName] = useState<string>("");
  const [shoppingCart, setShoppingCart] = useState<number>(0);

  const addToShopping = async (itemPrice: number): Promise<void> => {
    try {
      const updateCard = doc(db, "Koszyk", userName);
      setShoppingCart(itemPrice + shoppingCart);
      await setDoc(updateCard, { CardValue: shoppingCart+itemPrice });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLogged(true);
        setUserName(`${user.email}`);
        try {
          const cardValueSnapshot = await getDoc(
            doc(db, "Koszyk", `${user.email}`)
          );
          if (cardValueSnapshot.exists()) {
            const { CardValue } = cardValueSnapshot.data();
            setShoppingCart(CardValue);
          } else setShoppingCart(0);
        } catch (error) {
          console.log(error);
        }
      } else setIsLogged(false);
    });
  }, [setIsLogged]);

  return (
    <BrowserRouter>
      <div className="app">
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
            element={
              isLogged ? (
                <Home
                  shoppingCart={shoppingCart}
                  addToShopping={addToShopping}
                  className="home.element"
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
