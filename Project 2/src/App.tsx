import './App.css';
import React, { useContext, useEffect } from 'react'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { Home } from './components/Home/Home';
import { StoreContext } from './providers/StoreProvider';
import { Login } from './components/Login/Login';
import { firebaseAuth, firebaseDb } from './index';

function App() {
  const { username, setUsername, setCartProducts } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect((): void => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const userEmail = user.email;
        setUsername(userEmail);

        try {
          const docRef = doc(firebaseDb, "cart", `${userEmail}`);
          const cartValueSnapshot = await getDoc(docRef);
          console.log(cartValueSnapshot);
          if (cartValueSnapshot.exists()) {
            const data = cartValueSnapshot.data();
            setCartProducts(data.products);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setUsername('');
        setCartProducts([]);
      }
    });
  }, [setCartProducts, setUsername]);

  useEffect((): void => {
    if (username) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [username, navigate]);

  return (
      <Routes>
        <Route path="/" element={
            username ? (
              <Navigate to='/home' />
            ) : (
              <Navigate to='/login' />
            )} 
        />       
        <Route path="/home" element={
          <Home />
        }/>
        <Route path="/login" element={
          <Login />
        }/>
      </Routes>
  );
}

export default App;
