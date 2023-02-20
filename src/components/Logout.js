import React from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constant";
const Logout = () => {
  const histroy = useNavigate();
  const { _, dispatch } = useContext(UserContext);
  const sendRequest = async () => {
    try {
      let res = await await axios.post(`${BASE_URL}/logout`);
      if (res.status == "Login Succesfully")
        dispatch({ type: "USER", payload: false });
      histroy("/");
    } catch (err) {
      histroy("/login");
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);
  return <div></div>;
};

export default Logout;
