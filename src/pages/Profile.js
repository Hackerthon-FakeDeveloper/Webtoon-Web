import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile(props) {
  const token = sessionStorage.getItem("USER");

  const [inputs, setInputs] = useState({
    gender: "",
    age: "",
    nickname: "",
  });

  const { gender, age, nickname } = inputs; // 비구조 할당, 값 추출

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs, // 기존의 객체 복사
      [name]: value,
    });
  };

  // 회원 정보 수정
  const onClick = (e) => {
    console.log(inputs);

    axios
      .put("http://api.modutoon.com:80/user", {
        headers: {
          Authorization: token,
          data: {
            gender: gender,
            age: age,
            nickname: nickname,
          },
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  return (
    <section className="Profile">
      <div className="container text-center p-4 mt-3">
        <h1 className="text-2xl">프로필 설정 🛠</h1>
        <hr />
        <div className="flex flex-col">
          <div className="mb-2 mx-auto">
            <label for="nickname" className="text-sm">
              닉네임
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input type="text" name="nickname" value={nickname} onChange={onChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="mb-2 mx-auto">
            <label for="age" className="text-sm">
              나이
            </label>
            <div className="mt-1 relative ">
              <input type="number" name="age" value={age} onChange={onChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="mb-2 mx-auto">
            <label for="gender" className="text-sm">
              성별
            </label>

            <select name="gender" className="mt-1 relative rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300" onChange={onChange}>
              <option selected value="M">
                남자
              </option>
              <option value="F">여자</option>
            </select>
          </div>

          <div className="mt-2">
            <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              변경
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
