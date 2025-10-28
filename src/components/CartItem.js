import React from "react";
import { useCart } from "../context/CartContext";

// Import images from your Images folder
import dish1 from "../Images/dish1.jpg";
import dish2 from "../Images/dish2.jpg";
import dish3 from "../Images/dish3.jpg";
import dish4 from "../Images/dish4.jpg";
import dish5 from "../Images/dish5.jpg";
import dish6 from "../Images/dish6.jpg";
import dish7 from "../Images/dish7.jpg";
import dish8 from "../Images/dish8.jpg";
import dish9 from "../Images/dish9.jpg";
import dish10 from "../Images/dish10.jpg";
import dish11 from "../Images/dish11.jpg";
import dish12 from "../Images/dish12.jpg";
import dish13 from "../Images/dish13.jpg";
import dish14 from "../Images/dish14.jpg";

// Image map for dynamic display
const imageMap = {
  "paneer-butter-masala": dish1,
  "samosa": dish2,
  "biryani": dish3,
  "naan": dish4,
  "gulab-jamun": dish5,
  "dosa": dish6,
  "dal-makhani": dish7,
  "tandoori-chicken": dish8,
  "mango-lassi": dish9,
  "fried-rice": dish10,
  "ras-malai": dish11,
  "paneer-tikka": dish12,
  "roti": dish13,
  "idli-sambar": dish14,
};

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="card mb-3 shadow-sm border-0">
      <div className="row g-0 align-items-center p-2">
        {/* Item image */}
        <div className="col-auto">
          <img
            src={imageMap[item.image] || dish1}
            alt={item.name}
            className="img-fluid rounded"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Item details */}
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

          {/* Quantity controls */}
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

            {/* Price section */}
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
