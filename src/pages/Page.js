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
      <div className="container">
        <a href={data.url}>
          <img src={data.thumbnail} alt="thumbnail" title={data.title} />
        </a>
        <h1>{data.title}</h1>
        <h2>작가: {name}</h2>
        <h2>플랫폼: {data.platform}</h2>
        <h2>연재시작: {data.startDate}</h2>
        <p>{data.description}</p>
      </div>
    </section>
  );
}

export default Page;
