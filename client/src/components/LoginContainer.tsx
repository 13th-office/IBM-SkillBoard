import { useState } from "react";
import Login from "./Login/Login";
import { Credentials } from "../../lib/types";

const LoginContainer = () => {
  const [message, setMessage] = useState<string>("");

  const handleLogin = (values: Credentials) => {
    if (!values.password && !values.email) {
      setMessage("Email and password are required");
    } else if (!values.password) {
      setMessage("Password is required");
    } else if (!values.email) {
      setMessage("Email is required");
    } else {
      setMessage("Todo gud");
    }

    console.log(values);
  };

  return <Login handleLogin={handleLogin} message={message} />;
};

export default LoginContainer;
