import './App.css';
import { useState, useContext, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Home } from './components/Home/Home';
import { AuthContext } from './providers/Auth';
import { Login } from './components/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './firebase';
import { db } from './firebase'
import { addDoc, collection } from 'firebase/firestore';


function App() {
  const {isLogged, setIsLogged} = useContext(AuthContext);
  const [basketValue, setBasketValue] = useState(0);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log(user)
      if (user) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    });
  }, [])

  const addToCart = (productValue: number) => {
      setBasketValue(basketValue + productValue);

      const cartCollection = collection(db,'basketValue', id, 'userBasket')
      await addDoc(cartCollection), {
        basketValue: 
        userBasket: 
      }
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
