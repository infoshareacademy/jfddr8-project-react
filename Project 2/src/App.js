import './App.css';
import ProductsList from './components/ProductsList';
import { ProductsListItem } from './components/ProductsListItem';
import { useState } from 'react';

function App() {
  return (
    <div>
          <ProductsList />
          <ShoppingCart />
    </div>
      );
}

export default App;
