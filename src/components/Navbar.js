import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo1 from "../Images/logo1.png";
import "../App.css"; // 👈 make sure this contains the CSS below

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
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo1}
            alt="Restaurant Logo"
            className="img-fluid"
            style={{
              height: "50px",
              width: "80px",
              objectFit: "contain",
            }}
          />
        </NavLink>

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
              <li key={link.path} className="nav-item me-4">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link fw-medium px-3 py-2 rounded ${
                      isActive ? "active-link" : "inactive-link"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-3">
            {/* Cart */}
            <NavLink to="/cart" className="btn position-relative">
              <i className="bi bi-cart3 fs-5 text-dark"></i>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-orange"
                  style={{
                    fontSize: "0.7rem",
                    transform: "translate(-30%, 30%)",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </NavLink>

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
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `btn btn-md blue-btn ${
                      isActive ? "active-blue" : "inactive-blue"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `btn btn-md blue-btn ${
                      isActive ? "active-blue" : "inactive-blue"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
