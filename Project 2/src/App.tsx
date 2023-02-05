import "./App.css";
import { useState, useContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { LoginStatus } from "./providers/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from ".";
import { firebaseDb } from ".";
import { getDoc, doc, setDoc } from "firebase/firestore";

function App() {
  const { isLogged } = useContext(LoginStatus);
  const [userName, setUserName] = useState('')
  const [shoppingCart, setShoppingCart] = useState<number>(0);

  const addToShopping = async (itemPrice: number): Promise<void> => {
    try {
      const updateCart = doc(firebaseDb, 'Koszyk', userName)
      setShoppingCart(itemPrice + shoppingCart);
      await setDoc(updateCart, {CartValue: shoppingCart})
    } catch (error){
      console.log(error)
    }
   };
   const { setIsLogged } = useContext(LoginStatus);

   useEffect(() => {
    onAuthStateChanged (firebaseAuth, async (user) => {
     if(user) {
      setIsLogged(true);
      setUserName(`${user.email}`)
      try {
        const cartValueSnapShot = await getDoc(doc(firebaseDb, 'Koszyk', `${user.email}`))
        if (cartValueSnapShot.exists()){
          const {CartValue} = cartValueSnapShot.data()
          setShoppingCart(CartValue);
        }   
      } catch (error) {
        console.log(error)
      }
     }else {
      setIsLogged(false);
     }
    })
   }, [setIsLogged]);

  return (
    
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              isLogged ? <Navigate to="/home" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={isLogged ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/home"
            element={
              isLogged ? (
                <Home
                  shoppingCart={shoppingCart}
                  addToShopping={addToShopping}
                  className="home.element"
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
  );
}

export default App;