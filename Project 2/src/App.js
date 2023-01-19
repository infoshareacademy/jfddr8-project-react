import { ProductList } from './components/ProductList';
import { ProductsData } from './data/products';
import './App.css';
import { ShoppingCart } from './components/ShoppingCart';
import { useContext, useState } from 'react';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './providers/Auth';

function App() {
	const [price, setPrice] = useState(0);

	const SumPrice = (currentProductPrice) => {
		setPrice(price + currentProductPrice);
	};

  // const {isLogged} = useContext(MyUserContext)

	return (
		<div>
      <BrowserRouter>
      <Routes>
      <Route path='home' element={<Home products={ProductsData} sumPrice={SumPrice} price={price}/>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='/' element={<Login />} />
      </Routes>
      </BrowserRouter>
      
      
			
		</div>
	);
}

export default App;
