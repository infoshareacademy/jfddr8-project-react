import products from "../../data/products";
import { ProductListItem } from "../ProductListItem/ProductListItem";

type AddToCart = {
  addToCart: (productValue: number) => void;
}

export const ProductList = ( {addToCart}: AddToCart ) => {


    return (
      <>
          {products.map((item) => (
            <ProductListItem key={item.id} item={item} addToCart={addToCart} />
           )
          )}
      </>
    )
}