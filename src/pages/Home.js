import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import paneerButterMasala from "../Images/paneer-butter-masala.jpg";
import brownie from "../Images/brownie.jpg";
import biryani from "../Images/biryani.jpg";
import naan from "../Images/naan.jpg";
import gulabJamun from "../Images/gulab-jamun.jpg";
import dosa from "../Images/dosa.jpg";
import dalMakhani from "../Images/dal-makhani.jpg";
import tandooriChicken from "../Images/tandoori-chicken.jpg";
import garlicNaan from "../Images/garlicnaan.jpg";

const Home = () => {
  const { isAuthenticated } = useAuth(); // ✅ check login
  const navigate = useNavigate();

  const featuredDishes = [
    { name: "Paneer Butter Masala", price: 280, image: paneerButterMasala, description: "Rich and creamy paneer-based curry" },
    { name: "Chocolate Brownie With Icecream", price: 250, image: brownie, description: "Warm, fudgy brownie." },
    { name: "Chicken Biryani", price: 320, image: biryani, description: "Aromatic rice with tender chicken" },
    { name: "Butter Naan", price: 40, image: naan, description: "Soft, fluffy Indian bread brushed with butter" },
    { name: "Gulab Jamun", price: 120, image: gulabJamun, description: "Soft milk-solid dumplings soaked syrup" },
    { name: "Masala Dosa", price: 150, image: dosa, description: "Crispy rice crepe." },
    { name: "Dal Makhani", price: 240, image: dalMakhani, description: "Lentils slow-cooked with butter and cream" },
    { name: "Tandoori Chicken", price: 380, image: tandooriChicken, description: "Succulent chicken marinated with spices." },
    { name: "Garlic Naan", price: 50, image: garlicNaan, description: "Naan topped with fresh garlic and coriander" },
  ];

  // ✅ Common function for handling protected actions
  const handleProtectedNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      toast.warning("Please login to view the menu 🍽️");
      navigate("/login");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          height: "600px",
          backgroundImage: `url(${paneerButterMasala})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
          }}
        ></div>
        <div className="position-relative z-1 px-3">
          <h1 className="display-3 fw-bold mb-4">
            Welcome to <span className="text-primary">LaCuisine</span>
          </h1>
          <p className="lead mb-4 text-white">
            Experience authentic Indian cuisine crafted with love and tradition.
            Order directly and save on delivery fees!
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button
              onClick={() => handleProtectedNavigation("/menu")}
              className="btn btn-warning btn-lg px-4 fw-semibold text-white"
            >
              Order Now
            </button>
            <Link
              to="/reservation"
              className="btn btn-outline-light btn-lg px-4 fw-semibold text-white"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1">Our Signature Dishes</h2>
          <p className="fs-5 text-secondary">
            Handpicked favorites that keep our customers coming back
          </p>
        </div>
        <div className="row g-4">
          {featuredDishes.map((dish, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-0 shadow-sm h-100">
                <div className="overflow-hidden" style={{ height: "250px" }}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: "transform 0.4s ease" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="fw-bold">{dish.name}</h5>
                  <p className="text-secondary mb-3">{dish.description}</p>
                  <div className="d-flex justify-content-between align-items-center px-3">
                    <span className="fw-bold text-primary fs-5">
                      ₹{dish.price}
                    </span>
                    <button
                      className="btn btn-md btn-warning text-white"
                      onClick={() => handleProtectedNavigation("/menu")}
                    >
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-5 text-center">
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          <h2 className="fw-bold fs-1 mb-4">Ready to Order?</h2>
          <p className="fs-5 text-secondary mb-4">
            Browse our full menu and place your order in minutes
          </p>
          <button
            onClick={() => handleProtectedNavigation("/menu")}
            className="btn btn-warning btn-lg px-5 fw-semibold text-white"
          >
            Explore Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
