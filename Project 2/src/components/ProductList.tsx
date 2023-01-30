// - `ProductsList` - odpowiedzialny za wyświetlenie listy produktów
// wszystkie elementy z listy
import React from "react";

import ProductsListItem from "../components/ProductsListItem";
import {ProductsData} from "../data/products";

function ProductsList() {
  return (
    <div>
      {ProductsData.map((e) => (
        <ProductsListItem
          key={e.id}
          title={e.title}
          price={e.price}
          image={e.images[0]} //zmienione względem ProductListItem image
          description={e.description}
        />
      ))}
    </div>
  );
}

export default ProductsList;