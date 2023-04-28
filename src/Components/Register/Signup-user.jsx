import React from "react";
import "./register.css";
import { useState } from "react";
export default function Signup() {
  const [checked, toggle] = useState("off");
  function handleToggle() {
    checked === "off" ? toggle("on") : toggle("off");
  }
  return (
    <>
      <div className="register-body">
        <div className="login-container">
          <div className="left-side">
            <img src="./src/Images/signup-cover.png" />

            <div className="square">
              <h3>Join us and let's succeed together !</h3>
            </div>
          </div>
          <div className="userInfo-register">
            <div className="switch-container">
              <label className="switch">
                <input
                  type="checkbox"
                  className="hide-checkbox"
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </div>
            {checked === "off" ? (
              <>
                <div className="first-last">
                  <label htmlFor="FIRST NAME" className="signup-label ">
                    FIRST NAME
                    <input
                      type="text"
                      placeholder="Hamzeh"
                      className="signup-input first-input"
                    />
                  </label>
                  <label htmlFor="LAST NAME" className="signup-label">
                    LAST NAME
                    <input
                      type="text"
                      placeholder="Dawahreh"
                      className="signup-input first-input"
                    />
                  </label>
                </div>
                <label htmlFor="USERNAME" className="signup-label">
                  USERNAME
                  <input
                    type="text"
                    placeholder="Hamzeh_Da"
                    className="signup-input"
                  />
                </label>
                <label htmlFor="EMAIL ADDRESS" className="signup-label">
                  EMAIL ADDRESS
                  <input
                    type="text"
                    placeholder="hmzhdawahreh@gmail.com"
                    className="signup-input"
                  />
                </label>
                <label htmlFor="PASSWORD" className="signup-label">
                  PASSWORD
                  <input
                    type="password"
                    placeholder="*******"
                    className="signup-input"
                  />
                </label>
              </>
            ) : (
              <>
                <label htmlFor="FIRST NAME" className="signup-label ">
                  COMPANY NAME{" "}
                  <input
                    type="text"
                    placeholder="Example co."
                    className="signup-input "
                  />
                </label>
                <label htmlFor="LAST NAME" className="signup-label">
                  Industry/Category{" "}
                  <input
                    type="text"
                    placeholder="Technology.."
                    className="signup-input "
                  />
                </label>
                <label htmlFor="USERNAME" className="signup-label">
                  USERNAME
                  <input
                    type="text"
                    placeholder="Example-co."
                    className="signup-input"
                  />
                </label>
                <label htmlFor="EMAIL ADDRESS" className="signup-label">
                  EMAIL ADDRESS
                  <input
                    type="text"
                    placeholder="Example-co.@gmail.com"
                    className="signup-input"
                  />
                </label>
                <label htmlFor="PASSWORD" className="signup-label">
                  PASSWORD
                  <input
                    type="password"
                    placeholder="*******"
                    className="signup-input"
                  />
                </label>
              </>
            )}
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

            <button className="login-button">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}
