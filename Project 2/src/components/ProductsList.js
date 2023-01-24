import React from "react";

import ProductsListItem  from "./ProductsListItem"
import products from "../data/products";

function ProductsList(props) {
    return (
        <div>
            {products.map((e) => (
            <ProductsListItem 
            key={e.id}
            title={e.title}
            price={e.price}
            images={e.images}
            description={e.description}
            addToCart={props.addToCart}
            />))}
        </div>
    )
}
export default ProductsList;