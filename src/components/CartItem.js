import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="card mb-3 shadow-sm border-0">
      <div className="row g-0 align-items-center p-2">
        {/* 🖼️ Item Image */}
        <div className="col-auto">
          <img
            src={item.image} // ✅ Directly use image from menuData
            alt={item.name}
            className="img-fluid rounded"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* 📝 Item Details */}
        <div className="col ps-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="mb-1">{item.name}</h5>
              <p
                className="text-muted mb-1"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.description}
              </p>
            </div>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => removeFromCart(item.id)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          {/* 🔢 Quantity Controls */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <i className="bi bi-dash"></i>
              </button>
              <span className="px-2 fw-bold">{item.quantity}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>

            {/* 💰 Price Section */}
            <div className="text-end">
              <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
                ₹{item.price} each
              </p>
              <p className="mb-0 fw-bold text-warning">
                ₹{item.price * item.quantity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
