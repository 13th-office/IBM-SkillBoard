import React, { Fragment } from "react";
import "./Login.css";
import Logo from "../Logo";
import { Formik, Form, Field } from "formik";
import { Credentials } from "../../../lib/types";

interface Props {
  handleLogin: (values: Credentials) => string;
}

const Login = ({ handleLogin }: Props) => {
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
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values: Credentials) => {
              handleLogin(values);
            }}
          >
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="cristianoronaldodossantosaveiro@ibm.com"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Muchas gracias aficion, esto es para vosotros SIUUUUUU"
                />
              </div>
              <button type="submit">Log in</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
