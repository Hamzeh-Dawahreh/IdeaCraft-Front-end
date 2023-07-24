import React, { useState } from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

export default function Facebook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const handleFacebookResponse = (response) => {
    if (
      response &&
      response.accessToken &&
      response.name &&
      response.email &&
      response.picture &&
      response.picture.data &&
      response.picture.data.url
    ) {
      setIsLoggedIn(true);
      setUserData(response);
    } else {
      console.log("Facebook login failed.");
    }
  };

  let fbContent;

  if (
    isLoggedIn &&
    userData.name &&
    userData.email &&
    userData.picture &&
    userData.picture.data &&
    userData.picture.data.url
  ) {
    // Show user data after successful login
    fbContent = (
      <>
        <div>Welcome, {userData.name}!</div>
        <div>Email: {userData.email}</div>
        <div>Profile Picture:</div>
        <img src={userData.picture.data.url} alt="Profile" />
      </>
    );
  } else {
    // Show Facebook login button
    fbContent = (
      <FacebookLogin
        appId="1424702665029428"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookResponse}
      />
    );
  }

  return <>{fbContent}</>;
}
