import React, { useEffect, useState, createRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useScreenshot, createFileName } from "use-react-screenshot";

function Page() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const [preProfile, setProfile] = useState({
    content: "",
    scoreFirst: "",
    scoreSecond: "",
    scoreThird: "",
    webtoon: id,
  });

  const { content, scoreFirst, scoreSecond, scoreThird } = preProfile;

  const onChange = (e) => {
    const { value, name } = e.target;

    setProfile({
      ...preProfile, // 기존의 객체 복사
      [name]: value,
    });
  };

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

  const onClickReview = () => {
    axios
      .post(
        "http://api.modutoon.com:80/review",
        {
          content: preProfile.content,
          scoreFirst: Number(preProfile.scoreFirst),
          scoreSecond: Number(preProfile.scoreSecond),
          scoreThird: Number(preProfile.scoreThird),
          webtoon: Number(id),
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("USER"),
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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

        <div className="container text-center p-4 mt-3">
          <h1 className="text-2xl">리뷰 작성</h1>
          <hr />
          <div className="flex flex-col">
            <div className="mb-2 mx-auto">
              <label for="content" className="text-sm">
                한줄평
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="content" value={content} onChange={onChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>

            <div className="mb-2 mx-auto">
              <label for="scoreFirst" className="text-sm">
                작화
              </label>
              <div className="mt-1 relative ">
                <input type="number" name="scoreFirst" value={scoreFirst} onChange={onChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>

            <div className="mb-2 mx-auto">
              <label for="scoreSecond" className="text-sm">
                스토리
              </label>

              <div className="mt-1 relative ">
                <input type="number" name="scoreSecond" value={scoreSecond} onChange={onChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>

            <div className="mb-2 mx-auto">
              <label for="scoreThird" className="text-sm">
                연출
              </label>

              <div className="mt-1 relative ">
                <input type="number" name="scoreThird" value={scoreThird} onChange={onChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>

            <div className="mt-2">
              <button onClick={onClickReview} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                제출
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
