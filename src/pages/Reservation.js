import React, { useState } from "react";
import { toast } from "react-toastify";

function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "11:00",
    guests: 1,
    requests: ""
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.date) {
      toast.error("Please fill all required fields");
      return;
    }

    const reservation = {
      reservationId: "RES" + Date.now(),
      ...form,
      createdAt: new Date().toISOString(),
      status: "Confirmed"
    };

    const existing = JSON.parse(localStorage.getItem("reservations")) || [];
    localStorage.setItem("reservations", JSON.stringify([...existing, reservation]));

    toast.success("Table reserved successfully!");
    setForm({ name: "", phone: "", email: "", date: "", time: "11:00", guests: 1, requests: "" });
  };

  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>Reserve a Table</h2>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
          <div className="mb-3">
            <label className="form-label">Full Name *</label>
            <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number *</label>
            <input type="text" name="phone" className="form-control" value={form.phone} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email *</label>
            <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Date *</label>
            <input type="date" name="date" className="form-control" value={form.date} onChange={handleChange} min={new Date().toISOString().split("T")[0]} />
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <select name="time" className="form-select" value={form.time} onChange={handleChange}>
              {Array.from({ length: 13 }, (_, i) => 11 + i).map(hour => (
                <option key={hour} value={`${hour}:00`}>{hour}:00</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Guests</label>
            <select name="guests" className="form-select" value={form.guests} onChange={handleChange}>
              {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Special Requests</label>
            <textarea name="requests" className="form-control" value={form.requests} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-warning w-100">Reserve Table</button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
