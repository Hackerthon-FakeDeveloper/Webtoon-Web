import React from "react";

import ChartView from "../components/ChartView";
import CardView from "../components/CardView";
import StationView from "../components/StationView";

import stationJson from "../test/station.json";

function Main(props) {
  const defaultJson = "http://api.modutoon.com/webtoon/list?display=10"; // 기본
  const newJson = "http://api.modutoon.com/webtoon/new?display=10";

  return (
    <section className="Main">
      <div className="container p-6 mt-4">
        <h1 className="text-4xl">매일 새로운 웹툰을 발견해 보세요.</h1>
        <hr />
        <ChartView json={defaultJson}>실시간 TOP10</ChartView>
        <CardView json={newJson}>이달의 신작</CardView>
        <CardView json={defaultJson}>나만을 위한 추천</CardView>
        <hr />
        <StationView json={stationJson}>추천 스테이션</StationView>
        <CardView json={defaultJson}>로맨스</CardView>
        <CardView json={defaultJson}>액션</CardView>
        <CardView json={defaultJson}>코미디</CardView>
        <CardView json={defaultJson}>스릴러</CardView>
      </div>
    </section>
  );
}

export default Main;
