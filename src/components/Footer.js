import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-black py-4 mt-5 shadow-sm">
      <div className="container text-center">
        <h5 style={{ color: "#ff7b00" }}>LaCuisine</h5>
        <p>123, Food Street, City, Country | Phone: 9876543210 | Email: contact@lacuisine.com</p>
        <div className="mb-2">
          <a href="#" className="mx-2 text-black"><FaFacebook /></a>
          <a href="#" className="mx-2 text-black"><FaInstagram /></a>
          <a href="#" className="mx-2 text-black"><FaTwitter /></a>
        </div>
        <small>© 2025 LaCuisine. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
