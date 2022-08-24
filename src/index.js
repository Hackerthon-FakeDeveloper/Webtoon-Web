import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Page from "./pages/Page";
import Profile from "./pages/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="login/:token" element={<Login />} />
      <Route path="page/:id" element={<Page />} />
      <Route path="profile" element={<Profile />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
