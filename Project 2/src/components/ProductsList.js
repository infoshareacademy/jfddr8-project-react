// - `ProductsList` - odpowiedzialny za wyświetlenie listy produktów
// wszystkie elementy z listy
import React from "react";

import ProductsListItem from "../components/ProductsListItem";
import products from "../data/products";

function ProductsList() {
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

export default ProductsList;
