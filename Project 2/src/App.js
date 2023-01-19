import { ProductList } from './components/ProductList';
import { ProductsData } from './data/products';
import './App.css';
import { ShoppingCart } from './components/ShoppingCart';
import { useState } from 'react';
import { Home } from './components/Home';
import { Login } from './components/Login';

function App() {
	const [price, setPrice] = useState(0);

	const SumPrice = (currentProductPrice) => {
		setPrice(price + currentProductPrice);
	};

	return (
		<div>
      <Login />
      <Home products={ProductsData} sumPrice={SumPrice} price={price}/>
			
		</div>
	);
}

export default App;
