import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Order() {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty!");
      return;
    }
    const order = {
      orderId: "ORD" + Date.now(),
      items: cartItems,
      subtotal: getTotalPrice(),
      orderDate: new Date().toISOString(),
    };
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    toast.success("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="bg-white p-4 rounded shadow-sm">
            {cartItems.map(item => (
              <div key={item.id} className="d-flex justify-content-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Subtotal</span>
              <span>₹{getTotalPrice()}</span>
            </div>
            <button onClick={handleProceed} className="btn btn-warning w-100 mt-3">
              Proceed to Order
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Order;
