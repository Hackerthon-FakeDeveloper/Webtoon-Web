import React from "react";

import "../styles/Footer.css";

function Footer() {
  return (
    <section className="Footer">
      <footer class="container p-8 mt-6 ">
        <div className="text-center">
          <a href="https://securecoding.software/">소개딩 해커톤 시즌 4</a>
        </div>
        <div className="text-center">"이원우, 이대현, 신종욱, 김관식"</div>
        <div class="text-center">
          © 2022 <span class="text-gray-800"> 가짜개발자팀. </span>All Rights Reserved.
        </div>
      </footer>
    </section>
  );
}

export default Footer;
