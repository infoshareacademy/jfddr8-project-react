import "./App.css";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import ShoppingCartContext from "./Context/ShoppingCartContext";

function App() {
  const [price, setPrice] = useState(0);

  return (
    <div>
      <ShoppingCartContext.Provider value={[price, setPrice]}>
        <ShoppingCart />
        <ProductsList></ProductsList>
      </ShoppingCartContext.Provider>
    </div>
  );
}

export default App;
