import React from "react";
import { ProductsListItem } from "./ProductsListItem";

export function ShoppingCart (props) {
    return (
        <div>
            Shopping summary: {props.price}
        </div>
    )
}