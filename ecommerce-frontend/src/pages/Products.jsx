import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://ecommerce-project-backend-z4ut.onrender.com/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        // Support both paginated and plain array
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && Array.isArray(data.content)) {
          setProducts(data.content);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
        setProducts([]);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart successfully!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  };

  // Defensive filtering in case products is not an array
  const filteredProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.id?.toString().includes(searchTerm)
      )
    : [];

  if (loading) return <p className="loading">Loading products...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="products-container">
      <div className="products-header">
        <h2 className="products-title">Our Products</h2>
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar top-right"
        />
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="product-link">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default-image.jpg"; // Fallback image
                  }}
                />
                <h3 className="product-name">{product.name}</h3>
              </Link>
              <p className="product-price">₹{product.price?.toLocaleString()}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                🛒 Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
