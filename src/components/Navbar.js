import React from "react";

import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <section className="Navbar">
      <div className="md:container md:mx-auto bg-white">
        <h1 className="text-5xl p-5">모두의 웹툰</h1>
      </div>
    </section>
  );
}

export default Navbar;
