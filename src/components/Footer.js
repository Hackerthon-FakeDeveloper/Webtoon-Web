import React from "react";

import "../styles/Footer.css";

function Footer(props) {
  return (
    <section className="Footer">
      <footer class="p-4">
        <div className="text-center">
          <a href="https://securecoding.software/">소개딩 해커톤 시즌 4</a>
        </div>
        <div className="text-center">"이원우, 이대현, 신종욱, 김관식"</div>
        <div class="text-center">
          Copyright © 2022<span class="text-gray-800"> 가짜개발자팀</span>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
