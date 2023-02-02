import { useContext, useState, useEffect } from 'react';

import { ProductsData } from './data/products';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './providers/Auth';
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
  } from "firebase/auth";
  import { auth } from "./firebase";

function App() {
	const [price, setPrice] = useState<number>(0);
	const { isLogged, setIsLogged } = useContext(AuthContext);

	useEffect(() => {

	}, [])

	const SumPrice = (currentProductPrice: number): void => {
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
