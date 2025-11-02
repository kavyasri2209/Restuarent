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
      <div className="container ">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo1}
            alt="Restaurant Logo"
            className="img-fluid"
            style={{
              height: "50px",
              width: "150px",
              objectFit: "contain",
             
            }}
          />
        </NavLink>

        <div className="d-flex align-items-center">
          {/* Cart icon beside hamburger (visible always) */}
          <NavLink
            to="/cart"
            className="btn position-relative me-3 d-lg-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="bi bi-cart3 fs-5 text-dark"></i>
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning"
                style={{
                  fontSize: "0.7rem",
                  transform: "translate(-30%, 30%)",
                }}
              >
                {cartCount}
              </span>
            )}
          </NavLink>

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

          {/* ✅ Auth Buttons in mobile view (in one row, using your custom classes) */}
          <div className="d-flex align-items-center justify-content-center gap-2 mt-3 d-lg-none flex-wrap">
            {currentUser ? (
              <>
                <span className="text-muted small username d-flex align-items-center gap-1">
                  <i className="bi bi-person-circle"></i>
                  {currentUser.name}
                </span>
                <button
                  className="btn btn-md btn-outline-danger"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-1"></i><span className="fw-semibold fs-1">Logout</span>
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

          {/* Right Section (desktop view) */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            {/* Cart */}
            <NavLink to="/cart" className="btn position-relative">
              <i className="bi bi-cart3 fs-5 text-dark"></i>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning"
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
                <span className="text-muted small d-flex align-items-center gap-1 username">
                  <i className="bi bi-person-circle"></i>
                  {currentUser.name}
                </span>
                <button
                  className="btn btn-md btn-outline-danger"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-1"></i> Logout
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <NavLink
                  to="/login"
                  className="btn-login ms-2 btn-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="btn-signup ms-3 btn-md"
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
