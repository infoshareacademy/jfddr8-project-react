export const ProductListItem = ({item, addToCart}) => {
  
const logoSrc = "https://dummyjson.com/image/i/products/"

return (
  <div className="product-list-item">
    <div className="product-image">
      <img src={`${logoSrc}${item.id}/1.jpg`} alt={item.id}></img>
    </div>
    <div className="product-description">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div>
      <span>{`${item.price} $ `}<button onClick={() => addToCart(item.price, item.id)}>Dodaj do koszyka</button></span>
      </div>
    </div>
  </div>   
)
}
