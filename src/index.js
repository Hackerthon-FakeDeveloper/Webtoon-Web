import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login/:token" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
