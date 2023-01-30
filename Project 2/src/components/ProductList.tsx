// odpowiedzialny za wyświetlenie listy produktów
import products from "../../data/products";
import { ProductListItem } from "../ProductListItem/ProductListItem";

export const ProductList = ( {addToCart} ) => {


    return (
          products.map((item) => (
            <ProductListItem key={item.id} item={item} addToCart={addToCart} />
           )
          )
    )
}