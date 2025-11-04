import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Faq = () => {
  const faqs = [
    {
      question: "Do I need to create an account to order?",
      answer:
        "Yes, you need to log in or sign up before placing an order or reserving a table. This helps us keep track of your orders easily.",
    },
    {
      question: "Is delivery available?",
      answer:
        "Currently, we offer pickup and dine-in only. Delivery will be added soon!",
    },
    {
      question: "How can I modify or cancel my reservation?",
      answer:
        "You can contact our support team or visit your account section to modify or cancel your reservations before 1 hour of the scheduled time.",
    },
    {
      question: "Do you provide catering services?",
      answer:
        "Yes, we provide catering for events and parties. Please reach out through our Contact or Reservation section for details.",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5" style={{ color: "#ff7b00" }}>
        Frequently Asked Questions
      </h2>

      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item mb-3" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
