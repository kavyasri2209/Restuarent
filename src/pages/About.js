import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <section className="bg-warning text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Bringing authentic flavors to your table since 1995</p>
        </div>
      </section>

      <div className="container py-5">
        {/* Our Story */}
        <section className="mb-5 text-center">
          <h2 className="fw-bold mb-4">Our Story</h2>
          <p className="text-muted mb-3">
            Founded in 1995, Spice Paradise has been serving authentic Indian cuisine to our beloved
            community for nearly three decades. What started as a small family restaurant has grown
            into a culinary landmark, while staying true to our roots and traditional recipes.
          </p>
          <p className="text-muted mb-3">
            Our chefs bring generations of culinary expertise, using only the finest ingredients and
            traditional cooking methods. Every dish is prepared with love and attention to detail,
            ensuring that each bite transports you to the vibrant streets of India.
          </p>
          <p className="text-muted">
            By ordering directly from us, you help us eliminate third-party fees, allowing us to offer
            better prices while maintaining the highest quality standards. We're grateful for your
            support and look forward to serving you!
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-5 text-center">
          <h2 className="fw-bold mb-4">Visit Us</h2>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <div className="bg-warning bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <i className="bi bi-geo-alt fs-4 text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Location</h5>
                  <p className="text-muted small">
                    123 Spice Street<br />
                    Food District<br />
                    Mumbai - 400001
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <div className="bg-warning bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <i className="bi bi-telephone fs-4 text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Phone</h5>
                  <p className="text-muted small">
                    +91 9876543210<br />
                    Mon-Sun: 11 AM - 11 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <div className="bg-warning bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <i className="bi bi-envelope fs-4 text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Email</h5>
                  <p className="text-muted small">
                    info@spiceparadise.com<br />
                    We reply within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <div className="bg-warning bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: "50px", height: "50px"}}>
                    <i className="bi bi-clock fs-4 text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Hours</h5>
                  <p className="text-muted small">
                    Monday - Sunday<br />
                    11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Order Direct */}
        <section className="bg-white rounded shadow-sm p-4 text-center">
          <h3 className="fw-bold mb-4">Why Order Directly?</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h4 className="text-primary fw-bold">0%</h4>
              <p className="text-muted">Commission Fees</p>
            </div>
            <div className="col-md-4 mb-3">
              <h4 className="text-primary fw-bold">20%</h4>
              <p className="text-muted">Lower Prices</p>
            </div>
            <div className="col-md-4 mb-3">
              <h4 className="text-primary fw-bold">100%</h4>
              <p className="text-muted">Authentic Quality</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
