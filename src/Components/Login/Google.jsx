import React, { useState, useContext } from "react";
import { AuthContext } from "../../App";
import axios from "axios";
import { LoginSocialGoogle } from "reactjs-social-login";
import MyGoogleLoginButton from "./createButton";
import { useNavigate } from "react-router";

const GoogleLoginComponent = (role) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleGoogleLogin = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3500/authentication/google",
        {
          email: data.email,
          name: data.name,
          role: role.role,
        }
      );
      // Assuming the response contains a token or other userData from the server
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(!isLoggedIn);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LoginSocialGoogle
        client_id="490532619739-9jsmcadire0korlpd1ku8ir0dhhu76sh.apps.googleusercontent.com"
        discoveryDocs="claims_supported"
        access_type="offline"
        scope="profile email"
        onResolve={({ data }) => {
          handleGoogleLogin(data);
        }}
        onReject={({ error }) => {
          console.log(error);
        }}
      >
        {/* <GoogleLoginButton /> */}
        <MyGoogleLoginButton />
      </LoginSocialGoogle>
    </>
  );
};

export default GoogleLoginComponent;
