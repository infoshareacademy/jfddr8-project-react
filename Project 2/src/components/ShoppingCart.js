import { useContext } from "react";
import { LoginContext } from "../providers/Auth";

function ShoppingCart(props) {
  const cart = props.cart || [];
  const total = cart.reduce((sum, item) => (sum += item.price), 0);
  const loginState = useContext(LoginContext);
  const isLoggedIn = loginState && loginState.isLoggedIn;

  const wrapperStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <>
      <div style={wrapperStyle}>
        <div>
          {total !== 0 ? (
            <>Suma koszyka to: {total} $</>
          ) : (
            <>Koszyk jest pusty.</>
          )}
        </div>
        {isLoggedIn ? (
          <button onClick={() => loginState.logOut()}>Wyloguj</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
