import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Faq from "./pages/Faq";

import OrderSummary from "./pages/OrderSummary";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

// ✅ Redirect logic component
const RedirectHome = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/menu" /> : <Home />;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <main style={{ minHeight: "80vh" }}>
            <Routes>
              <Route path="/" element={<RedirectHome />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/order"
                element={
                  <ProtectedRoute>
                    <Order />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reservation"
                element={
                  <ProtectedRoute>
                    <Reservation />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/faqs" element={<Faq />} />
              <Route path="/order-summary" element={<OrderSummary />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
