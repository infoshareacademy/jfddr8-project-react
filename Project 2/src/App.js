import './App.css';
import {ProductsList} from './components/ProductsList';
import {ProductsData} from './data/products';
import {ShoppingCart} from './components/ShoppingCart'

function App() {

  return (
    <div>
      <ProductsList products={ProductsData}/>
      <ShoppingCart/>
    </div>
  );
}

export default App;
