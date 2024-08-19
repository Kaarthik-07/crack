import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gray-100">
      <Nav />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);
