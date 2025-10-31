import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const { cartItems } = useCart();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Redirect logged-in user automatically
  useEffect(() => {
    if (isAuthenticated) {
      if (cartItems.length > 0) navigate("/cart");
      else navigate("/");
    }
  }, [isAuthenticated, navigate, cartItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(formData.email, formData.password);

    if (success) {
      toast.success("Login successful!");
      if (cartItems.length > 0) navigate("/cart");
      else navigate("/");
    } else {
      toast.error("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div
              className="rounded-circle bg-warning d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="bi bi-person-plus fs-3 text-white"></i>
            </div>
        <h3 className="text-center mb-3 text-dark fw-bold">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold">
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary fw-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
