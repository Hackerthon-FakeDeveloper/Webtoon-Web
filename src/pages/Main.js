import React from "react";

import ChartView from "../components/ChartView";
import CardView from "../components/CardView";

import "../styles/Main.css";

import stationJson from "../test/station.json";

function Main(props) {
  const toonJson = "http://api.modutoon.com/webtoon/list?display=10";

  return (
    <section className="Main">
      <div className="container">
        <h1 className="text-4xl p-2">매일 새로운 웹툰을 발견해 보세요.</h1>
        <hr />
        <ChartView json={toonJson}>인기 차트</ChartView>
        <CardView json={toonJson}>이달의 신작</CardView>
        <CardView json={toonJson}>나만을 위한 추천</CardView>
        <CardView json={stationJson}>스테이션</CardView>
      </div>
    </section>
  );
}

export default Main;
