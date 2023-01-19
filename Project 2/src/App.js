import "./App.css";
import ProductsList from "./components/ProductsList";
import { useState } from "react";

function App() {

  const [shoppingCart, serShoppingCart] = useState(props);
  const AddToShoppingCart = () => {
    serShoppingCart =
  }

  return (
    <div>
      <ProductsList>{AddToShoppingCart} </ProductsList>
      <ShoppingCart />
    </div>
  );
}

export default App;
