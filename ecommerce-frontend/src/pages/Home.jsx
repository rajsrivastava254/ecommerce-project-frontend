import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Discover the latest products and amazing deals!</p>
      <Link to="/products">
        <button style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}>
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default Home;
