import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo1 from "../Images/logo1.png";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const cartCount = getTotalItems();

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMenuOpen(false);
  };

  // ✅ Links shown based on login status
  const navLinks = currentUser
    ? [
        { name: "Menu", path: "/menu" },
        { name: "Reservations", path: "/reservation" },
        { name: "About", path: "/about" },
        { name: "FAQs", path: "/faqs" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Reservations", path: "/reservation" },
        { name: "About", path: "/about" },
        { name: "FAQs", path: "/faqs" },
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
            style={{ height: "50px", width: "150px", objectFit: "contain" }}
          />
        </NavLink>

        <div className="d-flex align-items-center">
          {/* Cart icon beside hamburger (mobile) */}
          {currentUser && (
            <NavLink
              to="/cart"
              className="btn position-relative me-3 d-lg-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="bi bi-cart3 fs-5 text-dark"></i>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning"
                  style={{ fontSize: "0.7rem", transform: "translate(-30%, 30%)" }}
                >
                  {cartCount}
                </span>
              )}
            </NavLink>
          )}

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          {/* Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item me-4">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link fw-bold px-3 py-2 rounded ${
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

          {/* ✅ Auth Buttons */}
          <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center mt-2 mt-lg-0">
            {currentUser ? (
              <>
                {/* Cart Icon (Desktop) */}
                <NavLink to="/cart" className="btn position-relative d-none d-lg-inline">
                  <i className="bi bi-cart3 fs-5 text-dark"></i>
                  {cartCount > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning"
                      style={{ fontSize: "0.7rem", transform: "translate(-30%, 30%)" }}
                    >
                      {cartCount}
                    </span>
                  )}
                </NavLink>

                {/* User Info + Logout */}
                <span className="text-muted small d-flex align-items-center gap-1">
                  <i className="bi bi-person-circle"></i> {currentUser.name}
                </span>
                <button className="btn btn-md btn-outline-danger" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right me-1"></i> Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn-login btn-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="btn-signup btn-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
