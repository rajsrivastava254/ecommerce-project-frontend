import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff", textAlign: "center" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/products" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Products</Link>
      <Link to="/cart" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Cart</Link>
      <Link to="/about" style={{ margin: "10px", color: "white", textDecoration: "none" }}>About</Link>
    </nav>
  );
};

export default Navbar;
