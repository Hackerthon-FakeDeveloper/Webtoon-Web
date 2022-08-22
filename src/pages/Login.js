import React from "react";
import { useParams } from "react-router-dom";

function Login() {
  const { token } = useParams();

  return (
    <div>
      <h1>{token}</h1>
    </div>
  );
}

export default Login;
