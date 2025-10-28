import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const cartCount = getTotalItems();

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservation" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold text-primary"
          to="/"
        >
          <i className="bi bi-egg-fried me-2"></i>
          Spice Paradise
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          {/* Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  className="nav-link fw-medium text-dark"
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-3">
            {/* Cart */}
            <Link to="/cart" className="btn btn-outline-secondary position-relative">
              <i className="bi bi-cart3 fs-5"></i>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.7rem" }}
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth Buttons */}
            {currentUser ? (
              <div className="d-flex align-items-center gap-2">
                <span className="text-muted small d-flex align-items-center gap-1">
                  <i className="bi bi-person-circle"></i>
                  {currentUser.name}
                </span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-1"></i> Logout
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="btn btn-sm btn-outline-primary">Login</button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <button className="btn btn-sm btn-primary">Sign Up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
