import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function List() {
  const { list } = useParams();
  const [data, setData] = useState([]);
  var URL = ""; // 기본값

  switch (list) {
    case "이달의 신작":
      URL = "http://api.modutoon.com/webtoon/new";
      break;

    case "나만을 위한 추천":
      URL = "http://api.modutoon.com/webtoon/list";
      break;

    case "로맨스":
    case "액션":
    case "코미디":
    case "스릴러":
      URL = "http://api.modutoon.com:80/webtoon/tag/string/" + list;
      break;

    case "인기":
      URL = "http://api.modutoon.com:80/webtoon/popular/recent";
      break;

    default:
      break;
  }

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
      <div className="container p-6 mt-4">
        <h1 className="text-2xl">{list}</h1>

        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-6 py-2">
          {data.map((value) => (
            <div>
              <Link to={"/page/" + value.seq}>
                <div className="card-size overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <img src={value.thumbnail} alt="thumbnail" title={value.title} />
                </div>
                <p className="mt-2">{value.title}</p>
                <p className="text-zinc-500 text-xs">&#9733;0.0</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default List;
