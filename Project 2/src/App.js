import './App.css';
import ProductList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';

function App() {
  const [shoppingCart, setshoppingCart] = useState(0);

  const addToShopping = (itemPrice) => {
    setshoppingCart(itemPrice + shoppingCart);
  };

  return (
    <div classname='app'>
      <ProductList addToShopping={addToShopping}/>
      <ShoppingCart shoppingCart={shoppingCart}/>
    </div>
  );
  }

export default App;
