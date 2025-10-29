import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function MenuItem({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card mb-3" style={{ backgroundColor: "#fffaf3" }}>
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#000" }}>{item.name}</h5>
        <p className="card-text " style={{ color: "#000" }}>{item.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold" style={{ color: "#000" }}>₹{item.price}</span>
          <button onClick={() => addToCart(item)} className="btn btn-warning btn-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
