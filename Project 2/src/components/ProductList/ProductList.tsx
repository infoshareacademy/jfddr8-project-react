import products from "../../data/products";
import { ProductListItem } from "../ProductListItem/ProductListItem";

type ProductListProps = {
  addToCart: (productValue: number) => void;
}

export const ProductList = ( {addToCart}: ProductListProps ): JSX.Element => {


    return (
      <>
          {products.map((item) => (
            <ProductListItem key={item.id} item={item} addToCart={addToCart} />
           )
          )}
      </>
    )
}