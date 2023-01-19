import React, { Children } from "react";
import ProductsListItem from "./ProductsListItem";
import products from "../data/products";
import { useState } from "react";

function ProductList(props) {
  return (
    <div>
      {products.map((e) => (
        <ProductsListItem
          key={e.id}
          title={e.title}
          price={e.price}
          images={e.images}
          description={e.description}
          addToShopping={props.addToShopping}
        />
      ))}
    </div>
  );
}

export default ProductList;
