export type AddToShoppingType = (itemPrice: number) => void

type productsListItemProps = {
  title: string;
  images: string[];
  description: string;
  price: number;
  addToShopping: AddToShoppingType;
}

function ProductsListItem(props: productsListItemProps) {
  return (
    <div className="item-container">
      <div>
        <img className="item-image" src={props.images[0]}></img>
      </div>
      <div>
        <div className="item-title">{props.title}</div>
        <div className="item-description">{props.description}</div>
        <div className="item-price">{props.price} $</div>
        <button onClick={()=>props.addToShopping(props.price)}>Dodaj do koszyka</button>
      </div>
    </div>
  );
}

export default ProductsListItem;
