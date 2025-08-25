import React from "react";
import { useCart } from "../context/CartContext";
import "../components/Cart.css"; // Import external CSS for better styling

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "300px", height: "auto", borderRadius: "8px" }}
                className="cart-item-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/default-image.jpg"; // Fallback image
                }}
              />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>₹ {item.price.toLocaleString()}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
