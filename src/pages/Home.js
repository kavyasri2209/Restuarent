import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import paneerButterMasala from "../Images/paneer-butter-masala.jpg";
import samosa from "../Images/samosa.jpg";
import biryani from "../Images/biryani.jpg";
import naan from "../Images/naan.jpg";
import gulabJamun from "../Images/gulab-jamun.jpg";
import dosa from "../Images/dosa.jpg";
import dalMakhani from "../Images/dal-makhani.jpg";
import tandooriChicken from "../Images/tandoori-chicken.jpg";
import garlicNaan from "../Images/garlicnaan.jpg";

const Home = () => {
  const featuredDishes = [
    {
      name: "Paneer Butter Masala",
      price: 280,
      image: paneerButterMasala,
      description: "Rich and creamy paneer-based curry",
    },
    {
      name: "Vegetable Samosa",
      price: 80,
      image: samosa,
      description: "Crispy pastry with spiced filling",
    },
    {
      name: "Chicken Biryani",
      price: 320,
      image: biryani,
      description: "Aromatic rice with tender chicken",
    },
    {
      name: "Butter Naan",
      price: 40,
      image: naan,
      description: "Soft, fluffy Indian bread brushed with butter",
    },
    {
      name: "Gulab Jamun",
      price: 120,
      image: gulabJamun,
      description: "Soft milk-solid dumplings soaked in rose-flavored sugar syrup",
    },
    {
      name: "Masala Dosa",
      price: 150,
      image: dosa,
      description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney",
    },
    {
      name: "Dal Makhani",
      price: 240,
      image: dalMakhani,
      description: "Creamy black lentils slow-cooked with butter and cream",
    },
    {
      name: "Tandoori Chicken",
      price: 380,
      image: tandooriChicken,
      description: "Succulent chicken marinated in yogurt and spices, cooked in tandoor",
    },
    {
      name: "Garlic Naan",
      price: 50,
      image: garlicNaan,
      description: "Naan topped with fresh garlic and coriander",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          height: "890px",
          backgroundImage: `url(${paneerButterMasala})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
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
            <Link to="/menu" className="btn btn-warning btn-lg px-4 fw-semibold">
              <span className="text-white">Order Now</span>
            </Link>
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
                    style={{
                      transition: "transform 0.4s ease",
                    }}
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
                    <Link to="/menu" className="btn btn-md btn-warning">
                      <span className="text-white">View Menu</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold fs-1 mb-5">Why Choose Us</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border-0">
                <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                  <i className="bi bi-egg-fried fs-3 text-white"></i>
                </div>
                <h5 className="fw-bold mb-2">Authentic Flavors</h5>
                <p className="text-secondary">
                  Traditional recipes passed down through generations
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border-0">
                <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                  <i className="bi bi-clock-history fs-3 text-white"></i>
                </div>
                <h5 className="fw-bold mb-2">Fast Service</h5>
                <p className="text-secondary">
                  Quick preparation and delivery without compromising quality
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border-0">
                <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "70px", height: "70px" }}>
                  <i className="bi bi-star-fill fs-3 text-white"></i>
                </div>
                <h5 className="fw-bold mb-2">Best Value</h5>
                <p className="text-secondary">
                  Order directly and save on third-party delivery fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-5 text-center">
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          <h2 className="fw-bold fs-1 mb-4">Ready to Order?</h2>
          <p className="fs-5 text-secondary mb-4">
            Browse our full menu and place your order in minutes
          </p>
          <Link to="/menu" className="btn btn-warning btn-lg px-5 fw-semibold">
            Explore Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
