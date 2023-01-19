import { useState } from "react";

function ProductsListItem(props) {
    const [shoppingCart, setShoppingCart] = useState(props.price);

  const addToShopping = () => {
    setShoppingCart(shoppingCart + props.price);
    console.log('sh:', shoppingCart);
  };
  return (
    <div className="item-container">
      <div>
        <img className="item-image" src={props.images[0]}></img>
      </div>
      <div>
        <div className="item-title">{props.title}</div>
        <div className="item-description">{props.description}</div>
        <div className="item-price">{props.price} $</div>
        <button onClick={addToShopping}>Dodaj do koszyka</button>
      </div>
    </div>
  );
}

export default ProductsListItem;

