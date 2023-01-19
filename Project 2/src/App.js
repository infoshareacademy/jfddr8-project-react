import './App.css';
import  {ProductList } from './components/ProductList';
import {ProductsData} from './data/products'
import { useState , useContext } from 'react';
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ShoppingCart from './components/ShoppingCart'
// import Auth from " ./providers/Auth"
import { Login } from './components/Login';


function App() {
  const [price, setPrice] = useState(0)

  // const isLogged = useContext (MyUserContext)

  const SumPrice = (currentProductPrice) => {
    setPrice(price + currentProductPrice);
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home products={ProductsData} sumPrice={SumPrice} price={price}></Home>} />
          <Route path="login" element={<Login></Login>} />
          <Route path="/" element={<Login></Login>} />
        </Routes>      
      </BrowserRouter>     
    </div>
  );
}

export default App;
