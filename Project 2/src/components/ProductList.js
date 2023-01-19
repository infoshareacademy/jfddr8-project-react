import {ProductListItem} from "./ProductsListItem"


export function ProductList(props) {
    return (
        <div>
          {props.products.map((singleItem) => (
          <ProductListItem key={singleItem.id} title={singleItem.title} description={singleItem.description}
           price={singleItem.price} thumbnail={singleItem.thumbnail} sumPrice={singleItem.sumPrice}
          />))}
        </div> 
      );
}