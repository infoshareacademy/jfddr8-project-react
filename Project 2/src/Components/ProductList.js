import React from "react";

import ProductsListItem from "./ProductListItem";
import products from "../data/products";

function ProductList() {
  return (
    <div>
      {products.map((e) => (
        <ProductsListItem
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
