import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ApexCharts from "apexcharts";

Comment.propTypes = {
  json: PropTypes.string,
  children: PropTypes.string,
};

function Comment(props) {
  const { json, children } = props;
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(json);
      const webtoon = response.data.data.reviewList;
      setData(webtoon);
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
                <div className="flex flex-col justify-between comment-size overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out bg-c-gray p-4">
                  <div className="flex justify-between ">
                    <p>{value.user.nickname}</p>
                    <p>&#9733; {value.scoreFirst}점</p>
                  </div>
                  <hr />
                  <p className="text-sm">{value.content}</p>
                  <hr />
                  <div className="flex flex-row ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.383 12.25c.806 0 1.533-.446 2.031-1.08a9.04 9.04 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V4.75A.75.75 0 0113 4a2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H12.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H4.654m10.598-9.75H13M4.654 20.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368A12 12 0 011 17.125c0-1.553.295-3.036.831-4.398.306-.774 1.086-1.227 1.918-1.227h1.053c.472 0 .745.556.5.96A8.958 8.958 0 004 17.124c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                    <p className="mx-2">0</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p className="mx-2">0</p>
                  </div>
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
