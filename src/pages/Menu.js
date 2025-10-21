import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import menuData from "../data/menuData";

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Appetizers", "Main Course", "Breads", "Desserts", "Beverages", "South Indian"];

  const filteredItems = menuData.filter(item => 
    (category === "All" || item.category === category) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section style={{ backgroundColor: "#fffaf3", color: "#000", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2 className="mb-4 fw-bold" style={{ color: "#ff7b00" }}>Menu</h2>

        <div className="mb-4 d-flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn btn-sm ${category === cat ? "btn-warning" : "btn-outline-warning"}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search dishes..."
          className="form-control mb-4"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="row">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                <MenuItem item={item} />
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Menu;
