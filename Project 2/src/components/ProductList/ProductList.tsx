import products from "../../data/products";
import { CartProduct } from "../../providers/StoreProvider";
import { ProductListItem } from "../ProductListItem/ProductListItem";

type ProductListProps = {
  addToCart: (product: CartProduct) => void;
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