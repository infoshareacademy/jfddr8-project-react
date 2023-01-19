import "./App.css";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);
  const AddToShoppingCart = (currentPriceProduct) => {
    setShoppingCart(shoppingCart + currentPriceProduct);
  };

  return (
    <div>
      <ProductsList>{AddToShoppingCart} </ProductsList>
      <ShoppingCart />
    </div>
  );
}

export default App;
