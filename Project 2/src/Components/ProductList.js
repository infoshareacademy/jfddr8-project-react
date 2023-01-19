import React from 'react'
import ProductsListItem from './ProductsListItem'
import products from '../data/products'


function ProductList({addToShopping}) {                           
  return (
    <div> 
       {products.map((e)=>(
       <ProductsListItem addToShopping={addToShopping} key={e.id} title={e.title} price={e.price} images={e.images} description={e.description}/>))}
    </div>
  )
}

export default ProductList
