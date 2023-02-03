import { useContext } from "react";
import ShoppingCartContext from "../Context/ShoppingCartContext";
import Auth from "../Context/Auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function ShoppingCart() {
  const { price } = useContext(ShoppingCartContext);
  const { isLogged, setIsLogged } = useContext(Auth);

  function Logout() {
    setIsLogged(false);
    signOut(auth);

    // localStorage.removeItem("user");
  }

  return (
    <div>
      <div>SUM:{price}$</div>
      <button onClick={Logout}>Log out</button>
    </div>
  );
}

export default ShoppingCart;
