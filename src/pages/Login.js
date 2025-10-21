import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (success) {
      toast.success("Logged in successfully!");
      navigate("/menu");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
      <div className="container py-5 d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: "400px" }}>
          <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>Login</h2>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={form.password} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-warning w-100">Login</button>
          <p className="mt-3 text-center">Demo: demo@restaurant.com / demo123</p>
          <p className="mt-2 text-center">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
