import React from "react";
import PropTypes from "prop-types";

import "../styles/chart.css";

ChartView.propTypes = {
  data: PropTypes.array,
  children: PropTypes.string,
};

function ChartView(props) {
  const { data, children } = props;
  const json = data.data.list;

  return (
    <section className="ChartView">
      <h1 className="text-2xl p-5">{children}</h1>

      <ul className="hide-scroll-bar">
        {json.map((value, index) => (
          <li>
            <div className="select-none cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-1 items-center p-4">
              <div className="mr-4">{index + 1}</div>
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#1" className="block relative">
                  <img alt="thumbnail" src={value.image} className="mx-auto object-cover h-10 w-10" />
                </a>
              </div>
              <div className="flex-1 pl-1">
                <div className="font-medium dark:text-white">{value.title}</div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">{value.sub}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ChartView;
