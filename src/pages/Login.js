import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Login() {
  const { token } = useParams();
  let navigate = useNavigate();

  // 정사적으로 토큰이 들어오면 세션 스토리지에 저장
  if (token) {
    sessionStorage.setItem("USER", token);
  }

  // 사용자, 프로필 설정 확인
  axios
    .get("http://api.modutoon.com:80/user/checkinfoset", {
      headers: {
        Authorization: sessionStorage.getItem("USER"),
      },
    })
    .then(function (response) {
      const check = response.data.data.check;
      console.log(response.data);

      // false일 경우 프로필 설정으로 리다이렉트
      check === false ? navigate("/profile") : navigate("/");
    })
    .catch(function (error) {
      console.log(error.response.data);
    });

  return <div className="container"></div>;
}

export default Login;
