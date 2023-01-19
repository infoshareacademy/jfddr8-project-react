// - `ProductsListItem`- odpowiedzialny za wyświetlenie pojedynczego elementu na liście (obrazek, tytuł, opis i cena)

function ProductsListItem(props) {
  return (
    <div className="item-container">
      <img className="item-image" src={props.images[0]}></img>
      <div>
        <div className="item-title">{props.title}</div>
        <div className="item-description">{props.description}</div>
        <div className="item-price">{props.price} $</div>
        <button
          onClick={() => {
            AddToShoppingCart(props.price);
          }}>
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}

export default ProductsListItem;
