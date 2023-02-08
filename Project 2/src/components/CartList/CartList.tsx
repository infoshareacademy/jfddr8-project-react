import { CartProduct } from "../../providers/StoreProvider";
import { CartListItem } from "../CartListItem/CartListItem";

type CartListProps = {
  removeFromCart: (productId: number) => void;
  cartList: CartProduct[];
}

export const CartList = ( {removeFromCart, cartList}: CartListProps ): JSX.Element => {

    return (
      <>
          {cartList.map((item) => (
            <CartListItem key={item.id} item={item} removeFromCart={removeFromCart} />
           )
          )}
      </>
    )
}