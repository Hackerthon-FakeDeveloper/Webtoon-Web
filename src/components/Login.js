import React from "react";
import useGoole from "../components/Google";

function Login(props) {
  const id = "408453291856-b1eu5smkc233l9bgnf8ebb1r2afiep7u.apps.googleusercontent.com";

  const { loginUrl } = useGoole({
    clientId: id,
  });

  return (
    <a href={loginUrl} className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
      구글로 로그인
    </a>
  );
}

export default Login;
