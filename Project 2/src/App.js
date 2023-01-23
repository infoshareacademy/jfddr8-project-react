import "./App.css";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import ShoppingCartContext from "./Context/ShoppingCartContext";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Context/Auth";
function App() {
  const [price, setPrice] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <ShoppingCartContext.Provider value={[price, setPrice]}>
          <Auth.Provider value={[isLogged, setIsLogged]}>
            <Routes>
              <Route
                path="/login"
                element={
                  isLogged ? <Navigate to="/home" /> : <Navigate to="/login" />
                }></Route>
              <Route
                path="/home"
                element={
                  isLogged ? <Navigate to="/home" /> : <Navigate to="/login" />
                }></Route>
            </Routes>
          </Auth.Provider>
        </ShoppingCartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
