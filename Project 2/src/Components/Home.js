import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

function Home(props) {
    return (
        <div>
          <ShoppingCart shoppingCart={props.shoppingCart} />
          <ProductList addToShopping={props.addToShopping} />
        </div>
    );
};

export default Home;
