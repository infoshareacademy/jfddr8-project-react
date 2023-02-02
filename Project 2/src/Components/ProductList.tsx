import ProductsListItem from "./ProductsListItem";
import {ProductsData} from "../data/products";

type productListProps = {
  addToShopping: (itemPrice: number) => void;
};
function ProductList({ addToShopping }: productListProps) {
  return (
    <div>
      {ProductsData.map((e: any) => (
        <ProductsListItem
          addToShopping={addToShopping}
          key={e.id}
          title={e.title}
          price={e.price}
          images={e.images}
          description={e.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
