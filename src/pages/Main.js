import React from "react";

import ChartView from "../components/ChartView";
import CardView from "../components/CardView";
import StationView from "../components/StationView";

import "../styles/Main.css";

import stationJson from "../test/station.json";

function Main(props) {
  const toonJson = "http://api.modutoon.com/webtoon/list?display=10";

  return (
    <section className="Main">
      <div className="container p-4">
        <h1 className="text-4xl">매일 새로운 웹툰을 발견해 보세요.</h1>
        <hr />
        <ChartView json={toonJson}>인기 차트</ChartView>
        <CardView json={toonJson}>이달의 신작</CardView>
        <CardView json={toonJson}>나만을 위한 추천</CardView>
        <hr />
        <StationView json={stationJson}>스테이션</StationView>
        <CardView json={toonJson}>#로맨스</CardView>
        <CardView json={toonJson}>#판타지</CardView>
        <CardView json={toonJson}>#코미디</CardView>
        <CardView json={toonJson}>#스릴러</CardView>
      </div>
    </section>
  );
}

export default Main;
