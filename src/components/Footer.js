import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="secondary text-white py-4  shadow-sm">
      <div className="container text-center">
        {/* <h4 className="text-white">LaCuisine</h4> */}
        <p>123, Food Street, Visakhapatnam, India | Phone: 9876543210 | Email: contact@lacuisine.com</p>
        <div className="mb-2">
          <a href="https://www.facebook.com" className="mx-2 text-white"><FaFacebook /></a>
          <a href="https://www.instagram.com" className="mx-2 text-white"><FaInstagram /></a>
          <a href="https://www.twitter.com" className="mx-2 text-white"><FaTwitter /></a>
        </div>
        <small>© 2025 LaCuisine. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
