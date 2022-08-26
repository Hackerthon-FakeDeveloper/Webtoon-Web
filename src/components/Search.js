import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://api.modutoon.com:80/webtoon/new");

  const onChange = (e) => {
    setUrl("http://api.modutoon.com:80/webtoon/search?keyword=" + e.target.value);
  };

  const onClick = () => {
    getData();
  };

  async function getData() {
    try {
      const response = await axios.get(url);
      const webtoon = response.data.data.webtoonList;
      setData(webtoon);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="Search">
      <div className="container p-6 mt-4">
        {/* 검색바 */}
        <div class="flex items-center">
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="키워드를 입력해주세요"
              required=""
              onChange={onChange}
            />
          </div>
          <button
            onClick={onClick}
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span class="sr-only"></span>
          </button>
        </div>

        <hr />

        {/* 검색 웹툰 불러오기 */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 grid-cols-3 gap-6 py-2">
          {data.map((value) => (
            <div>
              <Link to={"/page/" + value.seq}>
                <div className="card-size rounded-lg overflow-hidden shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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

export default Search;
