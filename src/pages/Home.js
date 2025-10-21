import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000" }}>
      <div className="container py-5 text-center">
        <h1 className="fw-bold mb-4" style={{ color: "#ff7b00" }}>Welcome to LaCuisine</h1>
        <p className="mb-4">Enjoy delicious meals and reserve your table easily!</p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/menu" className="btn btn-warning">Order Now</Link>
          <Link to="/reservation" className="btn btn-outline-warning">Reserve Table</Link>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>Featured Dishes</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card" style={{ backgroundColor: "#fff" }}>
              <img src="/images/dish1.jpg" className="card-img-top" alt="Dish 1" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#000" }}>Paneer Butter Masala</h5>
                <p className="card-text" style={{ color: "#000" }}>Rich & creamy Indian paneer curry.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card" style={{ backgroundColor: "#fff" }}>
              <img src="/images/dish2.jpg" className="card-img-top" alt="Dish 2" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#000" }}>Chicken Biryani</h5>
                <p className="card-text" style={{ color: "#000" }}>Aromatic basmati rice with tender chicken.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card" style={{ backgroundColor: "#fff" }}>
              <img src="/images/dish3.jpg" className="card-img-top" alt="Dish 3" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#000" }}>Gulab Jamun</h5>
                <p className="card-text" style={{ color: "#000" }}>Sweet dessert soaked in sugar syrup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
