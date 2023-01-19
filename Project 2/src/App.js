import './App.css';
import {ProductsList} from './components/ProductsList';
import {ShoppingCart} from './components/ShoppingCart';
import {useState} from 'react';

function App() {

  const [price, setPrice] = useState(0);

  const SumPrice = (itemPrice) => {
   setPrice(itemPrice+price);
  };


  return (
    <div>
       <ShoppingCart price={price}/>
      <ProductsList SumPrice={SumPrice}/>
     
    </div>
  );
}

export default App;
