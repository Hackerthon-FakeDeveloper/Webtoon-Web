import React from "react";
import PropTypes from "prop-types";

import "../styles/Chartview.css";

ChartView.propTypes = {
  data: PropTypes.array,
  children: PropTypes.string,
};

function ChartView(props) {
  const { data, children } = props;
  const json = data.data.list;

  return (
    <section className="ChartView">
      <h1 className="text-2xl p-2">{children}</h1>

      <ul className="hide-scroll-bar">
        {json.map((value, index) => (
          <li>
            <div className="select-none cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-1 items-center p-4">
              <div className="mr-3">{index + 1}</div>
              <img alt="thumbnail" src={value.image} className="mx-auto object-cover h-10 w-10" />
              <div className="flex-1 pl-1">
                <div className="truncate">{value.title}</div>
                <div className="text-gray-500 text-sm">{value.sub}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ChartView;
