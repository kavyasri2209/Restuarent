import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="secondary text-white py-4 shadow-sm"
      style={{
        borderRadius: 0,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(159,78,3,0.8)",
      }}
    >
      <div className="container">

        {/* Top section: Motto, Awards, Contact Info */}
        <div className="row text-center text-md-start mb-3">

          {/* Motto */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="fw-bold mb-2 ">Our Motto</h5>
            <p className="fst-italic">Serving happiness on every plate, crafting authentic flavors,
              and bringing people together over unforgettable meals.
              Your delight is our passion!</p>
          </div>

          {/* Awards */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="fw-bold mb-2 ">Awards</h5>
            <p>🏆 Best Indian Cuisine 2025<br />🏆 Customer Choice Award 2024</p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 text-center">
            <h5 className="fw-bold mb-2 ">Contact Us</h5>
            <p>
              <FaMapMarkerAlt className="me-2 " />123, Food Street, Visakhapatnam, India
            </p>
            <p>
              <FaPhoneAlt className="me-2" />9876543210
            </p>
            <p>
              <FaEnvelope className="me-2" />contact@lacuisine.com
            </p>
          </div>
        </div>

        {/* Bottom section: Social icons + Rights reserved */}
        <div className="d-flex flex-column align-items-center gap-2">
          {/* Row 1: Social Icons */}
          <div className="d-flex gap-3 fs-4">
            <a href="https://www.facebook.com" className="text-white social-icon fb"><FaFacebook /></a>
            <a href="https://www.instagram.com" className="text-white social-icon insta"><FaInstagram /></a>
            <a href="https://www.twitter.com" className="text-white social-icon tw"><FaTwitter /></a>
          </div>

          {/* Row 2: Rights Reserved */}
          <div>
            <small>© 2025 LaCuisine. All rights reserved.</small>
          </div>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
