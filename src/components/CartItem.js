import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-between align-items-center mb-3 p-2 bg-white rounded shadow-sm">
      <div>
        <h6 className="mb-1" style={{ color: "#000" }}>{item.name}</h6>
        <p className="mb-0" style={{ color: "#000" }}>₹{item.price} x {item.quantity}</p>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-sm btn-outline-warning me-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span style={{ margin: "0 5px" }}>{item.quantity}</span>
        <button className="btn btn-sm btn-outline-warning ms-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        <button className="btn btn-sm btn-danger ms-3" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
