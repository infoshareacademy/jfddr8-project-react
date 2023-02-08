import { CartProduct } from "../../providers/StoreProvider";

type CartListItemProps = {
    item: CartProduct,
    removeFromCart: (productId: number) => void;
  }
  
  export const CartListItem = ({item, removeFromCart}: CartListItemProps): JSX.Element => {
  
  return (
    <div className="product-list-item">
        <h3>{item.title}</h3>
        <div>
        <span>{`${item.price} $ `}<button onClick={() => removeFromCart(item.id)}>Usuń z koszyka</button></span>
        </div>
    </div>
  )
}