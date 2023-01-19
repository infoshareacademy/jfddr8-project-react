import "./App.css";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { LoginStatus } from "./Provider/Auth";

function App() {
  const { isLogged, setIsLogged } = useContext(LoginStatus);

  const [shoppingCart, setShoppingCart] = useState(0);

  const addToShopping = (itemPrice) => {
    setShoppingCart(itemPrice + shoppingCart);
  };

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
          <Route path="/login" element={isLogged ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route
            path="/home"
            element={isLogged ? <Home shoppingCart={shoppingCart} addToShopping={addToShopping} className="home.element"/> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
