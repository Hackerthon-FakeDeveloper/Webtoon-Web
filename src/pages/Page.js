import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Comment from "../components/Comment";
import ControllBar from "../components/ControllBar";

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
      <div className="container p-6 mt-4">
        {/* PC, 태블릿 */}
        <div className="hidden md:flex">
          <a href={data.url}>
            <img src={data.thumbnail} alt="thumbnail" title={data.title} className="wh-270 rounded-lg shadow-md" />
          </a>
          <div className="flex flex-col ml-4 p-4 bg-white rounded-lg w-full shadow-md">
            <h1 className="text-3xl">{data.title}</h1>
            <p className="text-2xl">{name}</p>
            <p className="text-md">{data.platform}</p>
            <p>{data.startDate}</p>
            <p>평균 &#9733;{data.scoreTotalAverage}</p>
            <p>
              작화 &#9733;{data.scoreFirstAverage} / 스토리 &#9733;{data.scoreSecondAverage} / 연출 &#9733;{data.scoreThirdAverage}
            </p>
            <hr />
            <p className="text-sm">{data.description}</p>
          </div>
        </div>

        {/* 모바일 */}
        <div className="md:hidden flex flex-col">
          <div className="text-center">
            <a href={data.url}>
              <img src={data.thumbnail} alt="thumbnail" title={data.title} className="wh-270 rounded-lg shadow-md mx-auto" />
            </a>
            <div className="bg-white rounded-lg w-full shadow-md mt-4 p-4">
              <h1 className="text-3xl">{data.title}</h1>
              <p className="text-2xl">{name}</p>
              <p className="text-md">{data.platform}</p>
              <p>{data.startDate}</p>
              <p>평균 &#9733; {data.scoreTotalAverage}점</p>
              <p>
                작화 &#9733;{data.scoreFirstAverage} / 스토리 &#9733;{data.scoreSecondAverage} / 연출 &#9733;{data.scoreThirdAverage}
              </p>
              <hr />
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        </div>

        <ControllBar></ControllBar>

        <div className="mt-4 bg-white rounded-lg w-full h-full shadow-md p-4">
          <p className="text-2xl">리뷰</p>
          <Comment json={"http://api.modutoon.com:80/review/webtoonReview/" + id}></Comment>
          <hr />
          <p className="text-2xl">통계</p>
          <hr />
          <p className="text-2xl">관련 작품</p>
        </div>
      </div>
    </section>
  );
}

export default Page;
