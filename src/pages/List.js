import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

List.propTypes = {};

function List() {
  const { list } = useParams();
  const [data, setData] = useState([]);
  var URL = ""; // 기본값

  // 리스트 분류
  list === "이달의 신작" && (URL = "http://api.modutoon.com/webtoon/new?display=10");

  async function getData() {
    try {
      const response = await axios.get(URL);
      const webtoon = response.data.data.webtoonList;
      setData(webtoon);
      console.log(webtoon);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="List">
      <div className="container p-4 mt-4">
        <h1 className="text-2xl">{list}</h1>

        <div className="grid grid-cols-4 gap-4">
          {data.map((item, index) => {
            <div>{index}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default List;
