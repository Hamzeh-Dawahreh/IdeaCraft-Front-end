import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";
import Swal from "sweetalert2";

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
            <div className="login-with">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
            <button className="login-button" onClick={handleClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
