import { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);

  const addToShopping = (currentProductPrice) => {
    setShoppingCart(shoppingCart + currentProductPrice);
  };

  return (
    <div className="app">
      <ProductList addToShopping={addToShopping} />
      <ShoppingCart shoppingCart={shoppingCart} />
    </div>
  );
}

export default App;
