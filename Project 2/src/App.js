import { useContext, useState } from 'react';
import { ProductsData } from './data/products';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './providers/Auth';

function App() {
	const [price, setPrice] = useState(0);

	const { isLogged } = useContext(AuthContext);

	const SumPrice = (currentProductPrice) => {
		setPrice(price + currentProductPrice);
	};

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path='/home'
						element={
							isLogged ? (
								<Home
									products={ProductsData}
									sumPrice={SumPrice}
									price={price}
								/>
							) : (
								<Navigate to='/login' />
							)
						}></Route>
					<Route
						path='/login'
						element={isLogged ? <Navigate to='/home' /> : <Login />}></Route>
					<Route
						path='/'
						element={isLogged ? <Navigate to='/home' /> : <Login />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
