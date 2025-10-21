import React from "react";

function About() {
  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>About LaCuisine</h2>

        <div className="mb-5">
          <p>
            LaCuisine is a premium restaurant offering a unique blend of traditional and modern cuisine. 
            Our mission is to provide delicious meals directly to you while ensuring a comfortable and welcoming dining experience.
          </p>
          <p>
            We specialize in a variety of dishes, from authentic Indian curries to gourmet desserts, carefully prepared using the freshest ingredients.
          </p>
        </div>

        <div className="mb-5">
          <h4 style={{ color: "#ff7b00" }}>Location</h4>
          <p>123 Culinary Street, Foodie City, India</p>
        </div>

        <div className="mb-5">
          <h4 style={{ color: "#ff7b00" }}>Contact</h4>
          <p>Phone: +91 98765 43210</p>
          <p>Email: contact@lacuisine.com</p>
        </div>

        <div className="mb-5">
          <h4 style={{ color: "#ff7b00" }}>Opening Hours</h4>
          <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
        </div>

        <div className="mb-5">
          <h4 style={{ color: "#ff7b00" }}>Gallery</h4>
          <div className="row g-3">
            <div className="col-md-4">
              <img src="/images/dish1.jpg" alt="Dish 1" className="img-fluid rounded" />
            </div>
            <div className="col-md-4">
              <img src="/images/dish2.jpg" alt="Dish 2" className="img-fluid rounded" />
            </div>
            <div className="col-md-4">
              <img src="/images/dish3.jpg" alt="Dish 3" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
