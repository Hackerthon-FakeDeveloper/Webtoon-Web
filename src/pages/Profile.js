import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  var navigate = useNavigate();
  const token = sessionStorage.getItem("USER");

  token === null && navigate("/");

  const [preProfile, setProfile] = useState({
    nickname: "",
    age: "",
    gender: "",
  });

  const [inputs, setInputs] = useState({
    nickname: "",
    age: "",
    gender: "",
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
  const onClick = async () => {
    console.log(inputs);

    await axios
      .put(
        "http://api.modutoon.com:80/user",
        {
          gender: gender,
          age: age,
          nickname: nickname,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(function (response) {
        alert("정보 수정이 완료되었습니다!");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  // 렌더링시 불러오기
  useEffect(() => {
    axios
      .get("http://api.modutoon.com:80/user/myInfo", {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        setProfile(response.data.data.user);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }, [token]);

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
              <input type="text" name="nickname" value={nickname} onChange={onChange} placeholder={preProfile.nickname} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="mb-2 mx-auto">
            <label for="age" className="text-sm">
              나이
            </label>
            <div className="mt-1 relative ">
              <input type="number" name="age" value={age} onChange={onChange} placeholder={preProfile.age} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="mb-2 mx-auto">
            <label for="gender" className="text-sm">
              성별
            </label>

            <div className="mt-1 relative ">
              <input type="text" name="gender" value={gender} onChange={onChange} placeholder={preProfile.gender} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
            </div>
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
