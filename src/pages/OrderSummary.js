import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem("latestOrder"));

  if (!order) {
    return (
      <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
        <div className="container py-5 text-center">
          <p>No recent order found.</p>
          <button
            className="btn btn-warning mt-3"
            onClick={() => navigate("/menu")}
          >
            Go to Menu
          </button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>
          Order Placed Successfully 🎉
        </h2>

        <div className="bg-white p-4 rounded shadow-sm">
          <h5 className="fw-bold mb-3">Order ID: {order.orderId}</h5>
          <p className="text-muted mb-4">
            Date: {new Date(order.orderDate).toLocaleString()}
          </p>

          {order.items.map((item) => (
            <div key={item.id} className="d-flex justify-content-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <hr />
          <div className="d-flex justify-content-between fw-bold">
            <span>Subtotal</span>
            <span>₹{order.subtotal}</span>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-warning px-4"
              onClick={() => navigate("/menu")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
