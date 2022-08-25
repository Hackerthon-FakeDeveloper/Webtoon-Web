import React, { useState, useEffect } from "react";
import axios from "axios";

function Footer() {
  const [data, setData] = useState([]);
  const URL = "http://api.modutoon.com:80/review/count";

  async function getData() {
    try {
      const response = await axios.get(URL);
      const count = response.data.data.count;
      setData(count);
      console.log(count);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="Footer ">
      <div className="text-center mt-10">
        <div className="bg-point">
          <h1 className="text-xl p-4">지금까지 &#9733; {data}개의 리뷰가 쌓여있어요!</h1>
        </div>

        <div class="container p-10">
          <div>
            <a href="https://securecoding.software/">소개딩 해커톤 시즌 4</a>
            <br />
            "이대현, 이원우, 신종욱, 김관식" <br />© 2022 가짜개발자팀. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
