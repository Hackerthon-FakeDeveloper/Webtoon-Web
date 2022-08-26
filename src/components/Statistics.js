import React, { useState, useEffect } from "react";
import axios from "axios";

function Statistics(props) {
  const { title } = props;
  const [data, setData] = useState([]);

  async function getData() {
    axios
      .get("http://api.modutoon.com:80/review/detailscore/" + title)
      .then(function (response) {
        setData(response.data.data.detailReviewScore);
      })
      .catch(function (error) {});
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="Statistics">
      <p>남성 평점: {Number(data.m_review).toFixed(2)}</p>
      <p>여성 평점: {Number(data.f_review).toFixed(2)}</p>
      <p>10대 평점: {Number(data["10_review"]).toFixed(2)}</p>
      <p>20대 평점: {Number(data["20_review"]).toFixed(2)}</p>
      <p>30대 평점: {Number(data["30_review"]).toFixed(2)} </p>
    </section>
  );
}

export default Statistics;
