import "./App.css";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  const addToShopping = (itemPrice) => {
    setShoppingCart(itemPrice + shoppingCart);
  };
  // console.log(shoppingCart)

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
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <Home className="home.element">
                <ShoppingCart shoppingCart={shoppingCart} />
                <ProductList addToShopping={addToShopping} />
              </Home>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
