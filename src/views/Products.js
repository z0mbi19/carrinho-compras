import React, { useEffect, useState } from "react";
import { Products } from "../api/Products";
import ProductItem from "../components/ProductItem";

import "./Products.css";

function ProductsList(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await Products.getProducts();
      setProduct(results.items);
    };

    fetchData();
  }, [product]);

  return (
    <ul className="products-list">
      {product === [] ? (
        <h1>Loading</h1>
      ) : (
        product.map((p) => <ProductItem key={p.id} products={p} />)
      )}
    </ul>
  );
}

export default ProductsList;
