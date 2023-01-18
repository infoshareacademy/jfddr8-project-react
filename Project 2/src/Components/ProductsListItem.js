function ProductsListItem(props) {

 
  
    return (
    <div className="item-container">
        <img className="item-image" src={props.images[0]}></img>
        <div>
        <div className="item-title">{props.title}</div>
        <div className="item-description">{props.description}</div>
        <div className="item-price">{props.price} $</div>
        </div>
    </div>    
    
  )
}

export default ProductsListItem
