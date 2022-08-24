import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Page() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  async function getData() {
    try {
      //응답 성공
      const response = await axios.get("http://api.modutoon.com/webtoon/" + id);
      const webtoon = response.data.data.webtoon;
      setData(webtoon);
      setName(webtoon.author.name);

      console.log(webtoon);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="Page">
      <div className="container p-4 mt-3">
        <div className="hidden md:flex">
          <a href={data.url}>
            <img src={data.thumbnail} alt="thumbnail" title={data.title} className="wh-270 rounded-lg shadow-md" />
          </a>
          <div className="flex flex-col pl-6">
            <h1 className="text-3xl">{data.title}</h1>
            <p className="text-2xl">{name}</p>
            <p className="text-md">{data.platform}</p>
            <p>{data.startDate}</p>
            <p>평균 &#9733;0.0</p>
            <p className="text-sm mt-2">{data.description}</p>
          </div>
        </div>

        <div className="hidden md:flex mt-4 bg-white rounded-lg w-full h-full shadow-md p-4">
          <h1>평가</h1>
        </div>

        {/* 모바일 */}
        <div className="md:hidden flex flex-col">
          <div className="text-center">
            <a href={data.url}>
              <img src={data.thumbnail} alt="thumbnail" title={data.title} className="wh-270 rounded-lg shadow-md mx-auto" />
            </a>
            <h1 className="text-3xl">{data.title}</h1>
            <p className="text-2xl">{name}</p>
            <p className="text-md">{data.platform}</p>
            <p>{data.startDate}</p>
            <p>평균 &#9733;0.0</p>
            <p className="text-sm mt-2">{data.description}</p>
          </div>
        </div>

        <div className="md:hidden mt-4 bg-white rounded-lg w-full h-full shadow-md p-4">
          <h1>평가</h1>
        </div>
      </div>
    </section>
  );
}

export default Page;
