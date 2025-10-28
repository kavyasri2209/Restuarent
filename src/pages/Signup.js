import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.password || !form.confirmPassword) {
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
      password: form.password
    });

    if (success) {
      toast.success("Signup successful!");
      navigate("/menu");
    } else {
      toast.error("Email already exists!");
    }
  };

  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
      <div className="container py-5 d-flex justify-content-center">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-4 rounded shadow-sm w-100" 
          style={{ maxWidth: "400px" }}
        >
          <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>Sign Up</h2>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              value={form.name} 
              onChange={handleChange} 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              value={form.email} 
              onChange={handleChange} 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input 
              type="text" 
              name="phone" 
              className="form-control" 
              value={form.phone} 
              onChange={handleChange} 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-control" 
              value={form.password} 
              onChange={handleChange} 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              className="form-control" 
              value={form.confirmPassword} 
              onChange={handleChange} 
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 text-white">Sign Up</button>

          <p className="mt-3 text-center ">
            Already have an account? <Link to="/login" className="text-primary fw-semibold">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Signup;
