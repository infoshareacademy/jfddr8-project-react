import "./App.css";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import ShoppingCartContext from "./Context/ShoppingCartContext";

function App() {
  return (
    <div>
      <ProductsList></ProductsList>
      <ShoppingCart />
    </div>
  );
}

export default App;
