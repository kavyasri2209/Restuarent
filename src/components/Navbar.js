import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import logo from "/Images/logo.png";

function Navbar() {
  const { getTotalItems } = useContext(CartContext);
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="LaCuisine Logo" width="50" height="50" className="me-2" loading="eager" />
          <span className="fw-bold" style={{ color: "#ff7b00" }}>LaCuisine</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/menu" className="nav-link">Menu</NavLink></li>
            <li className="nav-item"><NavLink to="/reservation" className="nav-link">Reservations</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
            <li className="nav-item position-relative">
              <NavLink to="/cart" className="nav-link">
                <FaShoppingCart size={20} />
                {getTotalItems() > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {getTotalItems()}
                  </span>
                )}
              </NavLink>
            </li>
            {!currentUser ? (
              <>
                <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
                <li className="nav-item"><NavLink to="/signup" className="nav-link">Signup</NavLink></li>
              </>
            ) : (
              <>
                <li className="nav-item"><span className="nav-link">Hi, {currentUser.name}</span></li>
                <li className="nav-item">
                  <button className="btn btn-outline-warning btn-sm" onClick={logout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
