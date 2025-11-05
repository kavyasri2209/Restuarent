import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-white py-5"
      style={{
        borderRadius: "0",
        backgroundColor: "#ff7b00",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container">
        {/* Top Section: 3 Columns */}
        <div className="row justify-content-start align-items-start g-4">
          {/* Motto */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-2 text-light text-start">Our Motto</h5>
            <p className="fst-italic text-light mb-0 text-start">
              Serving happiness on every plate, crafting authentic flavors,
              and bringing people together over unforgettable meals.
              Your delight is our passion!
            </p>
          </div>

          {/* Awards */}
          <div className="col-12 col-md-4 ps-5 ">
            <h5 className="fw-bold mb-2 text-light text-start">Awards</h5>
            <p className="text-light mb-0 text-start">
              🏆 Best Indian Cuisine 2025<br />
              🏆 Customer Choice Award 2024
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-2 text-light text-start">Contact Us</h5>
            <p className="text-light mb-1 text-start">
              <FaMapMarkerAlt className="me-2" />
              123, Food Street, Visakhapatnam, India
            </p>
            <p className="text-light mb-1 text-start">
              <FaPhoneAlt className="me-2" />
              9876543210
            </p>
            <p className="text-light mb-0 text-start">
              <FaEnvelope className="me-2" />
              contact@lacuisine.com
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-4 text-white opacity-50" />

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center gap-3">
          {/* Social Icons */}
          <div className="d-flex gap-4 fs-4">
            <a href="https://www.facebook.com" className="text-white">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" className="text-white">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" className="text-white">
              <FaTwitter />
            </a>
          </div>

          {/* Rights Reserved */}
          <small className="text-light mb-0">
            © 2025 LaCuisine. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
