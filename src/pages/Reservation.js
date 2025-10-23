import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Reservation = ({ currentUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    phone: currentUser?.phone || "",
    email: currentUser?.email || "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "06:00 PM", "06:30 PM", "07:00 PM",
    "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM",
    "10:30 PM", "11:00 PM",
  ];

  const today = new Date().toISOString().split("T")[0];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    } else if (new Date(formData.date) < new Date(today)) {
      newErrors.date = "Please select a future date";
    }

    if (!formData.time) newErrors.time = "Please select a time";

    if (!formData.guests || parseInt(formData.guests) < 1 || parseInt(formData.guests) > 10) {
      newErrors.guests = "Number of guests must be between 1 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const reservation = {
      reservationId: "RES" + Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
      status: "Confirmed",
    };

    const existingReservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    localStorage.setItem("reservations", JSON.stringify([...existingReservations, reservation]));

    alert("Table reserved successfully! 🎉");
    navigate("/");
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="text-center mb-4">
          <i className="bi bi-calendar3-event fs-1 text-warning mb-2"></i>
          <h2 className="fw-bold">Reserve a Table</h2>
          <p className="text-muted">Book your table in advance for a seamless dining experience</p>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h5 className="card-title mb-4 fw-bold">Reservation Details</h5>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              {/* Phone & Email */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    maxLength={10}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>

              {/* Date, Time & Guests */}
              <div className="row g-3 mb-3">
                <div className="col-md-4">
                  <label className="form-label">Date *</label>
                  <input
                    type="date"
                    name="date"
                    className={`form-control ${errors.date ? "is-invalid" : ""}`}
                    value={formData.date}
                    min={today}
                    onChange={handleChange}
                  />
                  {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </div>
                <div className="col-md-4">
                  <label className="form-label">Time *</label>
                  <select
                    name="time"
                    className={`form-select ${errors.time ? "is-invalid" : ""}`}
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                </div>
                <div className="col-md-4">
                  <label className="form-label">Guests *</label>
                  <select
                    name="guests"
                    className={`form-select ${errors.guests ? "is-invalid" : ""}`}
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1} {i+1 === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                  {errors.guests && <div className="invalid-feedback">{errors.guests}</div>}
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-3">
                <label className="form-label">Special Requests (Optional)</label>
                <textarea
                  name="specialRequests"
                  className="form-control"
                  rows={3}
                  placeholder="Any dietary restrictions or preferences..."
                  value={formData.specialRequests}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-warning w-100 fw-semibold">
                Reserve Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
