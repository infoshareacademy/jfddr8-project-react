import { LoginStatus } from "../providers/Auth";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "..";

type shoppingCartType = {
  shoppingCart: number;
};

function ShoppingCart({ shoppingCart }: shoppingCartType) {
  const { setIsLogged } = useContext(LoginStatus);
  const handleLogOut = (): void => {
    setIsLogged(false);
    signOut(firebaseAuth);
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
