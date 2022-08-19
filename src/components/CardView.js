import React from "react";
import PropTypes from "prop-types";

CardView.propTypes = {
  data: PropTypes.array,
  children: PropTypes.string,
};

function CardView(props) {
  const { data, children } = props;
  const json = data.data.list;

  return (
    <section className="CardView">
      <h1 className="text-2xl p-2">{children}</h1>

      <div className="flex flex-col m-auto p-auto">
        <div className="flex overflow-x-scroll p-2 hide-scroll-bar">
          <div className="flex flex-nowrap">
            {json.map((value) => (
              <div className="inline-block pr-3">
                <div className="card-size overflow-hidden rounded-lg shadow-md  bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <a href={value.url}>
                    <img src={value.image} alt="thumbnail" />
                  </a>
                </div>
                <a href={value.url}>
                  <p className="mt-2">{value.title}</p>
                  <p className="text-zinc-500 text-sm">{value.sub}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardView;
