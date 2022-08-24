import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import "../styles/Chartview.css";

ChartView.propTypes = {
  json: PropTypes.string,
  children: PropTypes.string,
};

function ChartView(props) {
  const { json, children } = props;
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(json);
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
    <section className="ChartView">
      <h1 className="text-2xl">{children}</h1>

      <ul className="hide-scroll-bar">
        {data.map((value, index) => (
          <li>
            <div className="select-none cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-1 items-center py-4">
              <div className="mr-3">{index + 1}</div>
              <img alt="thumbnail" src={value.thumbnail} title={value.title} className="mx-auto object-cover h-10 w-10" />
              <div className="flex-1 pl-2">
                <div className="truncate">{value.title}</div>
                <div className="text-gray-500 text-xs">&#9733;0.0</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ChartView;
