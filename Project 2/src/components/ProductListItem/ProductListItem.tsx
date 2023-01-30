export type AddToCartFunctionType = (addToCart: number) => void
type ProductListItem = {
    item: {
      price: number,
      id: number,
      description: string,
      title: string,
    };
    addToCart: AddToCartFunctionType;
}

export const ProductListItem = ({item, addToCart}: ProductListItem) => {
  
const logoSrc = "https://dummyjson.com/image/i/products/"

return (
  <div className="product-list-item">
    <div className="product-image">
      <img src={`${logoSrc}${item.id}/1.jpg`} alt={`${item.id}`}></img>
    </div>
    <div className="product-description">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div>
      <span>{`${item.price} $ `}<button onClick={() => addToCart(item.price)}>Dodaj do koszyka</button></span>
      </div>
    </div>
  </div>   
)
}
