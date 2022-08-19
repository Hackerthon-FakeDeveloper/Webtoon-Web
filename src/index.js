import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Footer />
  </React.StrictMode>
);
