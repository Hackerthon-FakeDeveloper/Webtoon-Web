import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

Comment.propTypes = {
  json: PropTypes.string,
  children: PropTypes.string,
};

function Comment(props) {
  const { json, children } = props;
  const [data, setData] = useState([]);

  const testJson = "http://api.modutoon.com/webtoon/list?display=4";

  async function getData() {
    try {
      const response = await axios.get(testJson);
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
    <section className="Comment">
      <h1 className="text-2xl">{children}</h1>

      <div className="flex flex-col">
        <div className="flex overflow-x-scroll py-2 hide-scroll-bar">
          <div className="flex flex-nowrap">
            {data.map((value) => (
              <div className="inline-block pr-3">
                <div className="comment-size overflow-hidden rounded-lg bg-c-gray p-4">
                  <div className="flex justify-between">
                    <p>닉네임</p>
                    <p>&#9733; 0.0점</p>
                  </div>
                  <hr />
                  <p>여기는 평가 코멘트가 작성될 공간입니다. 여기는 평가 코멘트가 작성될 공간입니다.여기는 평가 코멘트가 작성될 공간입니다. 여기는 평가 코멘트가 작성될 공간입니다...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comment;
