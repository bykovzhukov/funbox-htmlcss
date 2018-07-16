import React from 'react';
import Product from './Product';

function ProductList(props) {
  const listProducts = props.products.map((product, index) =>
    <div className="product-list__item" key={index}>
      <Product product={product} />
    </div>
  );

  return (
    <div className="product-list">{listProducts}</div>
  );
}

export default ProductList;