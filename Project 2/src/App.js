import { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);

  const addToShopping = (currentProductPrice) => {
    setShoppingCart(shoppingCart + currentProductPrice);
  };

  return (
    <div className="app">
      <Home addToShopping={addToShopping} shoppingCart={shoppingCart}></Home>
      <Login></Login>
    </div>
  );
}

export default App;
