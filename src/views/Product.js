import React, { useEffect, useState } from "react";
import { Products } from "../api/Products";
import { addToCart } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function Product(props) {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await Products.getProductById(props.match.params.id);
      setProduct(data);
    };
    fetchData();
  }, [product]);

  return (
    <div>
      {product === [] ? (
        <h1>Loading</h1>
      ) : (
        <img src={`/assets/img/${product.image}`} alt={`${product.name}`} />
      )}
      {product === [] ? <h1>Loading</h1> : <h3>{product.name}</h3>}
      {product === [] ? (
        <h1>Loading</h1>
      ) : (
        <span className="product-price">
          <b>Price: </b> R${product.price}
        </span>
      )}
      {product === [] ? <h1>Loading</h1> : <p>{product.description}</p>}
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default Product;
