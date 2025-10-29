import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems, clearCart, getTotalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.info("Please log in to place your order");
      navigate("/login");
      return;
    }

    toast.success("Order placed successfully!");
    clearCart();
    navigate("/order");
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container text-center py-5">
        <h3 className="fw-bold text-muted mb-3">Your Cart is Empty</h3>
        <button
          className="btn btn-warning text-white fw-semibold"
          onClick={() => navigate("/menu")}
        >
          <i className="bi bi-arrow-left me-2"></i>Go to Menu
        </button>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.05; // 5% GST
  const total = subtotal + tax;

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4 text-dark">
        Your Cart <i className="bi bi-cart-check"></i>
      </h2>

      <div className="row">
        {/* --- Left Side: Cart Items --- */}
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* --- Right Side: Summary --- */}
        <div className="col-lg-4">
          <div className="card shadow border-0 sticky-top" style={{ top: "100px" }}>
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-center">Order Summary</h4>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h5 className="fw-bold">Total</h5>
                <h5 className="fw-bold text-warning">₹{total.toFixed(2)}</h5>
              </div>

              <button
                className="btn btn-warning text-white fw-semibold w-100 mt-4 py-2"
                onClick={handleCheckout}
              >
                <i className="bi bi-bag-check-fill me-2"></i>Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
