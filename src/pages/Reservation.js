import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Reservation = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser) {
      toast.info("Please log in to book a table");
      navigate("/login");
      return;
    }

    // ✅ Simple validation
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Table booked successfully!");
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
    });
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4 text-dark">
        Reserve Your Table <i className="bi bi-calendar-check"></i>
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="date" className="form-label fw-semibold text-dark">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="time" className="form-label fw-semibold text-dark">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="guests" className="form-label fw-semibold text-dark">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    className="form-control"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Enter number of guests"
                    min="1"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100 text-white fw-semibold py-2"
                >
                  <i className="bi bi-check2-circle me-2"></i>Book Table
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
