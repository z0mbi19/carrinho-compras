import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ products }) {
  return (
    <div className="product-item">
      <img src={`/assets/img/${products.image}`} alt={products.name} />
      <h3>{products.name}</h3>
      <span className="product-price">
        <b> Price: </b>
        {products.price}
      </span>
      <p>
        <Link to={`/product/${products.id}`}>Details</Link>
      </p>
    </div>
  );
}

export default ProductItem;
