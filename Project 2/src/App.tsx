import "./App.css";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { LoginStatus } from "./providers/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from ".";
import { firebaseDb } from ".";
import { doc, getDoc, setDoc } from "firebase/firestore";

function App() {
  const { isLogged } = useContext(LoginStatus);
  const [shoppingCart, setShoppingCart] = useState<number>(0);
  const { setIsLogged } = useContext(LoginStatus);
  const [user, setUser] = useState<string>("");

  const addToShopping = async (itemPrice: number): Promise<void> => {
    try {
      await setDoc(doc(firebaseDb, "shoppingCart", user), {
        shoppingCartValue: itemPrice + shoppingCart,
      });
      setShoppingCart(itemPrice + shoppingCart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        setUser(`${user.email}`);
        setIsLogged(true);
        try {
          const cartValueSnapshot = await getDoc(
            doc(firebaseDb, "shoppingCart", `${user.email}`)
          );
          if (cartValueSnapshot.exists()) {
            const { shoppingCartValue } = cartValueSnapshot.data();
            setShoppingCart(shoppingCartValue);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsLogged(false);
        setShoppingCart(0);
      }
    });
  }, [setIsLogged, setShoppingCart]);

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
