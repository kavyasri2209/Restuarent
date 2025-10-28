import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Attempt signup
    const success = signup({
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    });

    if (success) {
      toast.success("Signup successful!");
      navigate("/menu");
    } else {
      toast.error("Email already exists!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-3">
      <div
        className="card shadow-lg border-0"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <div
              className="rounded-circle bg-warning d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="bi bi-person-plus fs-3 text-white"></i>
            </div>
            <h3 className="fw-bold">Create Your Account</h3>
            <p className="text-muted">Join us and start your journey!</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={form.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning w-100 text-white fw-semibold py-2"
            >
              <i className="bi bi-person-check me-2"></i>Sign Up
            </button>

            <div className="text-center mt-3 small">
              <span className="text-muted">Already have an account? </span>
              <Link to="/login" className="text-orange fw-semibold text-decoration-none">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
