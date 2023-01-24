function ProductsListItem(props) {
    const addToCart = () => {
        const itemToAdd = {
            id: props.key,
            price: props.price,
        };

        props.addToCart(itemToAdd);
    }

    return (
        <div className="item-container">
            <div>
                <img className="item-image" src={props.images[0]} alt=""></img>
            </div>
            <div>
                <div className="item-title">{props.title}</div>
                <div className="item-description">{props.description}</div>
                <div className="item-price">{props.price} $</div>
                <button onClick={()=>addToCart()}>Dodaj do koszyka</button>
            </div>
        </div>
    )
}
export default ProductsListItem;