import React from "react";
import "./Login.css";
import Logo from "../Logo";
import { Formik } from "formik";

const Login = () => {
  return (
    <div className="general">
      <div className="half left">
        <div className="logo">
          <Logo />
        </div>
        <h1 className="text-white text-4xl w-[40rem]">
          Tus empleados son wapos, pero lo seran mas si le van al Barca
        </h1>
      </div>
      <div className="half right">
        <div className="login-box">
          <p className="text-xl font-bold">LOG IN</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
