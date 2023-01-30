import './App.css';
import { useState, useContext } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from './components/Home/Home';
import { AuthContext } from './providers/Auth';
import { Login } from './components/Login/Login';

function App() {
  const {isLogged} = useContext(AuthContext);
  const [basketValue, setBasketValue] = useState(0);

  const addToCart = (productValue) => {
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