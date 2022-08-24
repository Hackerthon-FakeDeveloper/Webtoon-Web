import React from "react";

import "../styles/Footer.css";

function Footer() {
  return (
    <section className="Footer">
      <footer class="container p-8 text-center">
        <h1>지금까지 &#9733; 1,320의 평가가 쌓여있어요!</h1>
        <div className=" mt-6">
          <a href="https://securecoding.software/">소개딩 해커톤 시즌 4</a>
          <br />
          "이대현, 이원우, 신종욱, 김관식" <br />© 2022 <span class="text-gray-800"> 가짜개발자팀. </span>All Rights Reserved.
        </div>
      </footer>
    </section>
  );
}

export default Footer;
