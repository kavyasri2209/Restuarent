import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CartItem from "../components/CartItem";      // ✅ Fixed path
import { useCart } from "../context/CartContext";   // ✅ Fixed path

const Cart = () => {
  const { cartItems, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.05; // 5% GST
  const deliveryCharges = subtotal < 500 && subtotal > 0 ? 40 : 0;
  const total = subtotal + tax + deliveryCharges;

  const handleCheckout = () => {
    navigate("/order");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-vh-50 d-flex align-items-center justify-content-center text-center">
        <div>
          <i className="bi bi-bag h1 text-muted mb-3"></i>
          <h2 className="fw-bold mb-2">Your cart is empty</h2>
          <p className="text-muted mb-3">Add some delicious items to get started!</p>
          <Link to="/menu" className="btn btn-warning btn-lg">
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Shopping Cart</h1>
        <button className="btn btn-outline-danger" onClick={clearCart}>
          <i className="bi bi-trash me-2"></i> Clear Cart
        </button>
      </div>

      <div className="row g-4">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card sticky-top shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold mb-4">Order Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Tax (5% GST)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Delivery</span>
                <span>
                  {deliveryCharges === 0 ? (
                    <span className="text-success">FREE</span>
                  ) : (
                    `₹${deliveryCharges}`
                  )}
                </span>
              </div>
              {subtotal > 0 && subtotal < 500 && (
                <p className="text-muted small">
                  Add ₹{(500 - subtotal).toFixed(2)} more for free delivery
                </p>
              )}
              <hr />
              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span className="text-warning">₹{total.toFixed(2)}</span>
              </div>
              <button className="btn btn-warning w-100 mt-3" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
              <Link to="/menu" className="btn btn-outline-secondary w-100 mt-2">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
