import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Demo credentials
    if (
      formData.email === "demo@restaurant.com" &&
      formData.password === "demo123"
    ) {
      navigate("/");
    } else {
      setError("Invalid credentials. Try demo@restaurant.com / demo123");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-3">
      <div className="card shadow-lg border-0" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <div
              className="rounded-circle bg-warning d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="bi bi-box-arrow-in-right fs-3 text-white"></i>
            </div>
            <h3 className="fw-bold">Welcome Back</h3>
            <p className="text-muted">Login to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="alert alert-danger py-2 small">{error}</div>
            )}

            <div className="alert alert-warning small">
              <strong>Demo Credentials:</strong>
              <br />
              Email: demo@restaurant.com
              <br />
              Password: demo123
            </div>

            <button
              type="submit"
              className="btn btn-warning w-100 text-white fw-semibold py-2"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>Login
            </button>

            <div className="text-center mt-3 small">
              <span className="text-muted">Don't have an account? </span>
              <Link to="/signup" className="text-warning fw-semibold">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
