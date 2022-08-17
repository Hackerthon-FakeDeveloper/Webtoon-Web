import React from "react";

import CardView from "../components/CardView";

import testJson from "../test/toon.json";

function Main(props) {
  return (
    <section className="Main">
      <div className="md:container md:mx-auto">
        <h1 className="text-5xl p-5">모두의 웹툰</h1>
        <h1 className="text-3xl p-5">둘러보기</h1>
        <hr />
        <CardView list={testJson} />
        <h1 className="text-2xl p-5">실시간 인기</h1>
        <hr />
        <CardView list={testJson} />

        <h1 className="text-2xl p-5">추천 스테이션</h1>
        <hr />
        <CardView list={testJson} />

        <h1 className="text-2xl p-5">나만을 위한 추천</h1>
        <hr />
        <CardView list={testJson} />
      </div>
    </section>
  );
}

export default Main;
