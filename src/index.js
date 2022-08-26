import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Page from "./pages/Page";
import Profile from "./pages/Profile";
import List from "./pages/List";
import Search from "./components/Search";
import NotFound from "./pages/NotFound";
import Review from "./pages/Review";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="search" element={<Search />} />

      <Route path="review/:id" element={<Review />} />
      <Route path="login/:token" element={<Login />} />
      <Route path="page/:id" element={<Page />} />
      <Route path="list/:list" element={<List />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
