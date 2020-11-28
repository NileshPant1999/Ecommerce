import React from "react";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  console.log(product);
  return (
    <div class="card">
      <a href="product.html">
        <img class="medium" src="./images/d1.jpg" alt="product" />
      </a>
      <div class="card-body">
        <a href="product.html">
          <h2>{product.name}</h2>
        </a>
        <Rating
          rating={product.rating}
          num_reviews={product.numReviews}
        ></Rating>
        <div class="price">{`$ ${product.price}`} </div>
      </div>
    </div>
  );
}
