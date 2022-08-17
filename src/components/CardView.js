import React from "react";
import PropTypes from "prop-types";

CardView.propTypes = {};

function CardView(props) {
  const { list } = props;
  const listJson = list.data.sort();

  return (
    <section className="CardView">
      <div class="flex flex-col m-auto p-auto">
        <div class="flex overflow-x-scroll p-5 hide-scroll-bar">
          <div class="flex flex-nowrap">
            {listJson.map((value) => (
              <div class="inline-block pr-3">
                <div class="w-32 h-32 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img src={value.image} alt="thumbnail" />
                </div>
                <h1>{value.title}</h1>
                <p>⭐️ {value.star}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardView;
