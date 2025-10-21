import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-white rounded shadow-sm">
              <span className="fw-bold" style={{ color: "#000" }}>Subtotal:</span>
              <span className="fw-bold" style={{ color: "#000" }}>₹{getTotalPrice()}</span>
            </div>
            <button
              className="btn btn-warning w-100 mt-3"
              onClick={() => navigate("/order")}
            >
              Proceed to Order
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
