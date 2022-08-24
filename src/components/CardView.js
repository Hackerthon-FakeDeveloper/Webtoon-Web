import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CardView.propTypes = {
  json: PropTypes.string,
  children: PropTypes.string,
};

function CardView(props) {
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
    <section className="CardView">
      <Link to={"/"}>
        <h1 className="text-2xl">
          {children} {">"}
        </h1>
      </Link>

      <div className="flex flex-col mb-6">
        <div className="flex overflow-x-scroll py-2 hide-scroll-bar">
          <div className="flex flex-nowrap">
            {data.map((value) => (
              <Link to={"/page/" + value.seq}>
                <div className="inline-block pr-3">
                  <div className="card-size overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <img src={value.thumbnail} alt="thumbnail" title={value.title} />
                  </div>
                  <p className="mt-2">{value.title}</p>
                  <p className="text-zinc-500 text-xs">&#9733;0.0</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardView;
