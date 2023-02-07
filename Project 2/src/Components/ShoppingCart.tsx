import { LoginStatus } from "../Providers/Auth";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

type shoppingCartType = {
  shoppingCart: []
}

function ShoppingCart({ shoppingCart }:shoppingCartType) {
  const { setIsLogged } = useContext(LoginStatus);
  const handleLogOut = ():void => {
    setIsLogged(false);
    signOut(auth);
  };

  return (
    <div>
      Price
      <p>{shoppingCart}$</p>
      <button onClick={() => handleLogOut()}>Log out</button>
    </div>
  );
}

export default ShoppingCart;