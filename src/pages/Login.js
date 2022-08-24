import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Login() {
  const { token } = useParams();
  let navigate = useNavigate();

  // 토큰이 정상적으로 발급 될 경우
  if (token) {
    localStorage.setItem("LOGIN_TOKEN", token);
  }

  // 유저 인포 체크
  axios
    .get("http://api.modutoon.com:80/user/checkinfoset", {
      headers: {
        Authorization: localStorage.getItem("LOGIN_TOKEN"),
      },
    })
    .then(function (response) {
      const check = response.data.data.check;
      console.log(response.data);

      // false일 경우 프로필로 리다이렉트
      check === false ? navigate("/profile") : navigate("/");
    })
    .catch(function (error) {
      console.log(error.response.data);
    });

  return <div className="container"></div>;
}

export default Login;
