import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

StationView.propTypes = {
  json: PropTypes.string,
  children: PropTypes.string,
};

function StationView(props) {
  const { json, children } = props;
  const data = json.data.list;

  return (
    <section className="CardView">
      <h1 className="text-2xl text-bold">{children}</h1>

      <div className="flex flex-col mb-6">
        <div className="flex overflow-x-scroll py-2 hide-scroll-bar">
          <div className="flex flex-nowrap">
            {data.map((value) => (
              <Link to={"/list/" + value.seq}>
                <div className="inline-block pr-3">
                  <div className="card-size overflow-hidden rounded-lg shadow-md  bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <img src={value.image} alt="thumbnail" title={value.title} />
                  </div>
                  <p className="mt-2">{value.title}</p>
                  <p className="text-zinc-500 text-xs">{value.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StationView;
