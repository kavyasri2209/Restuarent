import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1️⃣ Import Bootstrap first
import "bootstrap/dist/css/bootstrap.min.css";

// 2️⃣ Import your custom CSS AFTER Bootstrap
import "./App.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
