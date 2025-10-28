import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { menuData } from "../data/menuData";
import { useCart } from "../context/CartContext"; // ✅ Import cart context

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { addToCart } = useCart(); // ✅ Access addToCart from context

  const categories = ["All", ...Array.from(new Set(menuData.map((item) => item.category)))];

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-warning text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-2">Our Menu</h1>
          <p className="lead mb-0">Discover our delicious selection of authentic Indian cuisine</p>
        </div>
      </div>

      <div className="container py-5">
        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <div className="input-group shadow-sm">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn btn-md border border-white ${
                selectedCategory === category
                  ? "btn-warning text-white"
                  : "btn-outline-warning text-dark btn-color"
              }`}
              style={{
                textDecoration: "none",
                outline: "none",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="row g-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex">
                <div
                  className="card h-100 shadow-sm border-0 d-flex flex-column w-100"
                  style={{
                    backgroundColor: "#fffaf3",
                    borderRadius: "12px",
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "12px 12px 0 0",
                    }}
                  />

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column justify-content-between flex-grow-1 text-dark">
                    <div>
                      <h5 className="card-title fw-bold mb-1">{item.name}</h5>
                      <p className="card-text small mb-3">{item.description}</p>
                    </div>

                    {/* Bottom section */}
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fw-bold text-primary">₹{item.price}</span>
                        <span className="badge1">{item.category}</span>
                      </div>

                      {/* ✅ Add to Cart now works */}
                      <button
                        onClick={() => addToCart(item)}
                        className="btn btn-orange btn-sm rounded-pill w-100 px-3"
                      >
                        <i className="bi bi-cart-plus me-1"></i>Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted fs-5">No items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
