import React, { Children } from 'react'
import ProductsListItem from './ProductsListItem'
import products from '../data/products'
import { useState } from "react";


function ProductList() {                           
  
  
  return (
    <div> 
      
  {products.map((e)=>(<ProductsListItem key={e.id} title={e.title} price={e.price} images={e.images} description={e.description}/> ))}
    </div>
  )
}

export default ProductList
