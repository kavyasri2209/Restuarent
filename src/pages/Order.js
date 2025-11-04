import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Order() {
  const { cartItems, getTotalPrice, clearCart, setCartItems } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // ✅ Load cart from correct localStorage key "cart"
  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, [setCartItems]);

  // ✅ Save to same key "cart"
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    phone: currentUser?.phone || "",
    email: currentUser?.email || "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Calculate totals (no delivery charges)
  const subtotal = Number(getTotalPrice() || 0);
  const tax = subtotal > 0 ? subtotal * 0.05 : 0;
  const deliveryCharges = 0; // 🚫 no delivery fee
  const total = subtotal + tax;

  // ✅ Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.address.trim() || formData.address.length < 10)
      newErrors.address = "Address too short";
    if (!formData.city.trim() || formData.city.length < 3)
      newErrors.city = "City must be at least 3 characters";
    if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Pincode must be 6 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    const order = {
      orderId: "ORD" + Date.now(),
      ...formData,
      items: cartItems,
      subtotal,
      tax,
      deliveryCharges,
      totalAmount: total,
      paymentMethod: "COD",
      orderDate: new Date().toISOString(),
      status: "Pending",
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));
    localStorage.setItem("latestOrder", JSON.stringify(order));

    clearCart();
    localStorage.removeItem("cart");

    toast.success("Order placed successfully!");
    navigate("/order-summary");
  };

  return (
    <section style={{ backgroundColor: "#fffaf3", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2 className="fw-bold mb-4" style={{ color: "#ff7b00" }}>
          Checkout
        </h2>
        <div className="row g-4">
          {/* Left - Delivery Form */}
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow-sm">
              <h5 className="mb-3 fw-semibold">Delivery Details</h5>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength="10"
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                  <div className="col-12 mb-3">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Full Address *</label>
                  <textarea
                    name="address"
                    rows="3"
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      name="city"
                      className={`form-control ${
                        errors.city ? "is-invalid" : ""
                      }`}
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      className={`form-control ${
                        errors.pincode ? "is-invalid" : ""
                      }`}
                      value={formData.pincode}
                      onChange={handleChange}
                      maxLength="6"
                    />
                    {errors.pincode && (
                      <div className="invalid-feedback">{errors.pincode}</div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold mt-3"
                >
                  Place Order (COD)
                </button>
              </form>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="col-lg-4">
            <div
              className="bg-white p-4 rounded shadow-sm position-sticky"
              style={{ top: "100px" }}
            >
              <h5 className="fw-semibold mb-3">Order Summary</h5>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between mb-2"
                    >
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Tax (5%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total</span>
                    <span style={{ color: "#ff7b00" }}>
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </>
              ) : (
                <p className="text-muted">Your cart is empty.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
