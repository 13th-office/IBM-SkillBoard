import React from "react";
import Login from "./Login/Login";
import { Credentials } from "../../lib/types";

const LoginContainer = () => {
  const handleLogin = (values: Credentials) => {
    console.log(values);
    return "Zy";
  };

  return <Login handleLogin={handleLogin} />;
};

export default LoginContainer;
