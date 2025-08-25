import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) {
    return <div style={{ textAlign: "center", color: "red" }}>Error: {error}</div>;
  }

  if (!product) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{product.name}</h2>
      <img
        src={product.imageUrl} // Use correct image URL from API response
        alt={product.name}
        style={{ width: "300px", height: "auto", borderRadius: "8px" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/default-image.jpg"; // Fallback image
        }}
      />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Date:</strong> {product.release_date}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Availability:</strong> {product.availability ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductDetails;
