import { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);

  const addToShopping = (currentProductPrice) => {
    setShoppingCart(shoppingCart + currentProductPrice);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="home"
            element={
              <Home
                addToShopping={addToShopping}
                shoppingCart={shoppingCart}
              ></Home>
            }
          />

          <Route path="login" element={<Login></Login>} />
          <Route path="/" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
