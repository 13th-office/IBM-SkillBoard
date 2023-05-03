import { useState } from "react";
import Login from "./Login/Login";
import { Credentials } from "../../lib/types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useMutation } from "@tanstack/react-query";

const LoginContainer = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const mutation = useMutation({
    mutationFn: (values: Credentials) => {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common["Cache-Control"] = "no-cache";
      axios.defaults.headers.common["Pragma"] = "no-cache";
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, values, {
        withCredentials: true,
      });
    },
    onError: (error: any) => {
      setMessage(error.response.data.error);
    },
  });

  const handleLogin = (values: Credentials) => {
    if (!values.password && !values.email) {
      setMessage("Email and password are required");
    } else if (!values.password) {
      setMessage("Password is required");
    } else if (!values.email) {
      setMessage("Email is required");
    } else {
      mutation.mutate(values);
    }
  };

  return <Login handleLogin={handleLogin} message={message} />;
};

export default LoginContainer;
