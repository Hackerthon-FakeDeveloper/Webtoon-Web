import React from "react";

import ChartView from "../components/ChartView";
import CardView from "../components/CardView";

import "../styles/Main.css";

import toonJson from "../test/toon.json";
import stationJson from "../test/station.json";
import ChartJson from "../test/chart.json";

function Main(props) {
  return (
    <section className="Main">
      <div className="container">
        <h1 className="text-4xl p-2">매일 새로운 웹툰을 발견해 보세요.</h1>
        <hr />
        <ChartView data={ChartJson}>인기 차트</ChartView>
        <CardView data={toonJson}>이달의 신작</CardView>
        <CardView data={toonJson}>나만을 위한 추천</CardView>
        <CardView data={stationJson}>스테이션</CardView>
      </div>
    </section>
  );
}

export default Main;
