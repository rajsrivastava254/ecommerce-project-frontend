import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "150px", height: "150px" }} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)} style={{ padding: "10px", background: "#28a745", color: "white", border: "none" }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
