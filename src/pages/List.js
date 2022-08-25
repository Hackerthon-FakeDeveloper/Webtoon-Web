import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function List() {
  const { list } = useParams();
  const [data, setData] = useState([]);
  var URL = ""; // 기본값

  // 리스트 분류
  list === "이달의 신작" && (URL = "http://api.modutoon.com/webtoon/new");
  list === "나만을 위한 추천" && (URL = "http://api.modutoon.com/webtoon/list");
  list === "로맨스" && (URL = "http://api.modutoon.com:80/webtoon/tag/string/로맨스");
  list === "액션" && (URL = "http://api.modutoon.com:80/webtoon/tag/string/액션");
  list === "코미디" && (URL = "http://api.modutoon.com:80/webtoon/tag/string/코미디");
  list === "스릴러" && (URL = "http://api.modutoon.com:80/webtoon/tag/string/스릴러");
  list === "인기" && (URL = "http://api.modutoon.com:80/webtoon/popular/recent");

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

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 py-2">
          {data.map((value) => (
            <div>
              <Link to={"/page/" + value.seq}>
                <div className="card-size rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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
