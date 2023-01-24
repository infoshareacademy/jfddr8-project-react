import { useContext, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import ProductsList from "./ProductsList";
import { LoginContext } from "../providers/Auth";
import { Navigate } from "react-router-dom";

function Home() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const newCart = cart.concat([item]);
    setCart(newCart);
  };

  const loginState = useContext(LoginContext);
  const isLoggedIn =
    loginState !== undefined &&
    loginState !== null &&
    loginState.isLoggedIn === true;

  return isLoggedIn ? (
    <>
      <ShoppingCart cart={cart}></ShoppingCart>
      <ProductsList addToCart={addToCart}></ProductsList>
    </>
  ) : (
    <Navigate to="/login"></Navigate>
  );
}
export default Home;
