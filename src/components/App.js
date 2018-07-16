import React from 'react';
import ProductList from './ProductList';
import products from '../products';

function App() {
  return (
    <div className="container">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;