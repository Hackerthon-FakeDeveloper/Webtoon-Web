import React, { useEffect, useState, createRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useScreenshot, createFileName } from "use-react-screenshot";

import Comment from "../components/Comment";
import CardView from "../components/CardView";

function Page() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });

  async function getData() {
    try {
      //응답 성공
      const response = await axios.get("http://api.modutoon.com/webtoon/" + id);
      const webtoon = response.data.data.webtoon;
      setData(webtoon);
      setName(webtoon.author.name);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  const download = (image, { name = id, extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();

    const splitDataURI = image.split(",");
    const byteString = splitDataURI[0].indexOf("base64") >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

    let fromImg = new FormData();
    fromImg.append("file", new Blob([ia], { type: mimeString }));

    axios
      .post("http://api.modutoon.com:80/upload/capture", fromImg, {
        headers: {
          Authorization: sessionStorage.getItem("USER"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {})
      .catch(function (error) {});
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  const onClickLike = () => {
    axios
      .post(
        "http://api.modutoon.com:80/webtoon/like/" + id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("USER"),
          },
        }
      )
      .then(function (response) {
        alert("좋아요!");
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="Page" ref={ref}>
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
            <p>평균 &#9733;{Number(data.scoreTotalAverage).toFixed(2)}</p>
            <p>
              작화 &#9733;{Number(data.scoreFirstAverage).toFixed(2)} / 스토리 &#9733;{Number(data.scoreSecondAverage).toFixed(2)} / 연출 &#9733;{Number(data.scoreThirdAverage).toFixed(2)}
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
              <p>평균 &#9733; {Number(data.scoreTotalAverage).toFixed(2)}점</p>
              <p>
                작화 &#9733;{Number(data.scoreFirstAverage).toFixed(2)} / 스토리 &#9733;{Number(data.scoreSecondAverage).toFixed(2)} / 연출 &#9733;{Number(data.scoreThirdAverage).toFixed(2)}
              </p>
              <hr />
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        </div>

        {/* 컨트롤바 */}
        <section className="ControllBar">
          <div className="flex flex-row text-center rounded-lg shadow-md bg-white mt-4 p-4">
            <button className="flex-auto">⭐️ 평가</button>
            <button className="flex-auto">📝 리뷰</button>
            <button className="flex-auto" onClick={onClickLike}>
              ❤️ 좋아요
            </button>
            <button className="flex-auto" onClick={downloadScreenshot}>
              📸 스크린샷
            </button>
          </div>
        </section>

        <div className="mt-4 bg-white rounded-lg w-full h-full shadow-md p-4">
          <p className="text-2xl">리뷰</p>
          <Comment json={"http://api.modutoon.com:80/review/webtoonReview/" + id}></Comment>
          <hr />
          <p className="text-2xl">통계</p>
          <hr />
          <p className="text-2xl">관련 작품</p>
          <CardView json={"http://api.modutoon.com:80/webtoon/relate/" + id}></CardView>
        </div>
      </div>
    </section>
  );
}

export default Page;
