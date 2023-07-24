import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";
import Swal from "sweetalert2";
import Facebook from "../Components/Login/Facebook";
import GoogleLoginComponent from "../Components/Login/Google";
import "../Assets/Styles/register.css";
export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [role, setRole] = useState("user");
  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();
  async function handleClick(event) {
    event.preventDefault();
    try {
      let registrationUrl = "";
      if (role === "user") {
        registrationUrl = "http://localhost:3500/authentication/authUser";
      } else {
        registrationUrl = "http://localhost:3500/authentication/authCompany";
      }
      const response = await axios.post(registrationUrl, formValues);
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(!isLoggedIn);
      navigate("/");
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.data.error
        ? error.response.data.error
        : error.response.data.message;
      Swal.fire({
        icon: "error",
        title: "We're sorry!",
        text: errorMessage,
      });
    }
  }
  function handleRoleChange(e) {
    setRole(e.target.value);
  }
  return (
    <>
      <br />
      <br />
      <div className="register-body">
        <div className="login-container">
          <div className="left-side">
            <img src="./src/Assets/Images/login-cover.png" />

            <div className="circle"></div>
          </div>
          <div className="userInfo-register">
            <img src="./src/Assets/Images/login-user.png" />
            <h1>WELCOME</h1>
            <div className="space-x-2 flex">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={role === "user"}
                  onChange={handleRoleChange}
                  className="mr-2 text-red-500"
                />
                <span className="text-red-500">User</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="company"
                  checked={role === "company"}
                  onChange={handleRoleChange}
                  className="mr-2 text-red-500"
                />
                <span className="text-red-500">Company</span>
              </label>
            </div>
            <div className="input-icon">
              <input
                className="login-input"
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={formValues.email}
              />
              <i className="bi bi-person-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </i>
            </div>{" "}
            <div>
              <div className="input-icon">
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formValues.password}
                />
                <i className="bi bi-lock-fill">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </i>
              </div>
            </div>
            <div>
              <div>
                <Link className="link text-blue-600" to="/signup">
                  {" "}
                  Don't have an account?
                </Link>
              </div>
            </div>
            {role === "user" && <GoogleLoginComponent role={role} />}
            <button className="login-button" onClick={handleClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
