import { useContext, useState, useEffect } from 'react';
import { ProductsData } from './data/products';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './providers/Auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { db } from './firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';

function App() {
	
	const { isLogged, setIsLogged, products, setProducts } = useContext(AuthContext);
	const [userEmail, setUserEmail] = useState('');
	

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				setIsLogged(true);
				setUserEmail(`${user.email}`);
				console.log(user.email);
				const docRef = doc(db, 'cardValue', `${user.email}`);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					const data = docSnap.data();
					console.log(data);
					setProducts(data.products);
				}
			} else {
				setIsLogged(false);
			}
		});
	}, [setIsLogged, setProducts, products]);

	const addProduct = async (currentProduct: any): Promise<void> => {
		try {
			setProducts([...products, currentProduct]);
			await setDoc(doc(db, 'cardValue', userEmail), {
				products: [...products, currentProduct],
			});
			// await setDoc(doc(db, ''), {
			// 	id: items.length + 1,
			// 	title: items.title,
			// 	price: price
			// } )
		} catch (error) {
			console.log(error);
		}
		
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
									addProduct={addProduct}
									
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
