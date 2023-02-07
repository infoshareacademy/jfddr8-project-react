import "./App.css";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { AuthContext } from "./providers/Auth";
import { Login } from "./components/Login/Login";
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseDb } from "./firebase";
import { collection } from "firebase/firestore";
import { doc, addDoc, setDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { UserContext } from "./providers/User";
import { getDoc } from "firebase/firestore";

function App() {
  const [products, setProducts] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const [basketValue, setBasketValue] = useState(0);

  const addToCart = (price, id, title) => {
    const pricesRef = doc(firebaseDb, "Users", user);
    setProducts(products + { price: price, id: id, title: title });
    setDoc(pricesRef, {products: products})
  };

  // useEffect(() => {
  //   const pricesRef = doc(firebaseDb, "Users", 
  //   user
  //   );
  //   setTimeout(setDoc(pricesRef, {name: 'kupsko'}), 1);
  // }, [products]);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (data) => {
      if (data) {
        setIsLogged(true);
        setUser(data.uid);
        const pricesRef = doc(firebaseDb, "Users", data.uid);
        const snapshot = await getDoc(pricesRef);
        
      } else {
        setIsLogged(false);
      }
    });
  }, [products]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLogged ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/home"
          element={<Home basketValue={basketValue} addToCart={addToCart} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
