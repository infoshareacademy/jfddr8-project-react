import './App.css';
import { Lista } from './components/ProductsList';
import products from './data/products';


function App() {
  return (
    <div>
      <Lista data={products}/>
    </div>
  );
}

export default App;
