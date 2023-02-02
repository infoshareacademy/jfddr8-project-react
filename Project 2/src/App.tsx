import "./App.css";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { LoginStatus } from "./providers/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from ".";
import { useNavigate } from "react-router-dom";

function App() {
  const { isLogged } = useContext(LoginStatus);

  const [shoppingCart, setShoppingCart] = useState<number>(0);

  const addToShopping = (itemPrice: number): void => {
    setShoppingCart(itemPrice + shoppingCart);
   };

   const navigate = useNavigate();
   // const [isLoading, setIsLoading] = useState(true);
   
   const { setIsLogged } = useContext(LoginStatus);
   
   useEffect(() => {
   const unsubscribe = onAuthStateChanged(firebaseAuth, (login) => {
    setIsLogged(true);

     if(login) {
       navigate('/home');
     }
     
    })
   return () => unsubscribe();
   }, [setIsLogged]);

  return (
    
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
  );
}

export default App;
