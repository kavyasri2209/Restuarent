import React from "react";
import { useCart, CartItem as CartItemType } from "@/context/CartContext";
import paneerImage from "@/assets/paneer-butter-masala.jpg";
import samosaImage from "@/assets/samosa.jpg";
import biryaniImage from "@/assets/biryani.jpg";
import naanImage from "@/assets/naan.jpg";
import gulabJamunImage from "@/assets/gulab-jamun.jpg";
import dosaImage from "@/assets/dosa.jpg";
import dalMakhaniImage from "@/assets/dal-makhani.jpg";
import tandooriChickenImage from "@/assets/tandoori-chicken.jpg";
import mangoLassiImage from "@/assets/mango-lassi.jpg";
import friedRiceImage from "@/assets/fried-rice.jpg";
import rasMalaiImage from "@/assets/ras-malai.jpg";
import paneerTikkaImage from "@/assets/paneer-tikka.jpg";
import rotiImage from "@/assets/roti.jpg";
import idliSambarImage from "@/assets/idli-sambar.jpg";

const imageMap = {
  "paneer-butter-masala": paneerImage,
  "samosa": samosaImage,
  "biryani": biryaniImage,
  "naan": naanImage,
  "gulab-jamun": gulabJamunImage,
  "dosa": dosaImage,
  "dal-makhani": dalMakhaniImage,
  "tandoori-chicken": tandooriChickenImage,
  "mango-lassi": mangoLassiImage,
  "fried-rice": friedRiceImage,
  "ras-malai": rasMalaiImage,
  "paneer-tikka": paneerTikkaImage,
  "roti": rotiImage,
  "idli-sambar": idliSambarImage,
};

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center p-2">
        <div className="col-auto">
          <img
            src={imageMap[item.image] || paneerImage}
            alt={item.name}
            className="img-fluid rounded"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="col">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="mb-1">{item.name}</h5>
              <p className="text-muted mb-1" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
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
            <div className="text-end">
              <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
                ₹{item.price} each
              </p>
              <p className="mb-0 fw-bold">₹{item.price * item.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
