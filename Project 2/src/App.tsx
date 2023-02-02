// import od Maja

import './App.css';
import { useState, useContext , useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from './components/Home';
import { AuthContext } from './providers/Auth';
import { Login } from './components/Login';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const {isLogged, setIsLogged} = useContext(AuthContext);

  useEffect(()=>
{

},[]);
  const [basketValue, setBasketValue] = useState(0);

  const addToCart = (productValue: number) => {
      setBasketValue(basketValue + productValue);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            isLogged ? (
              <Navigate to='/home' />
            ) : (
              <Navigate to='/login' />
            )} 
        />       
        <Route path="/home" element={
          <Home 
            basketValue={basketValue}
            addToCart={addToCart}
          />
        }/>
        <Route path="/login" element={
          <Login />
        }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;