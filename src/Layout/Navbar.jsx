import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Assets/Styles/navbar.css";
import { AuthContext } from "../App";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {
    isLoggedIn,
    setIsLoggedIn,
    username,
    companyname,
    role,
    setCompanyName,
    setUsername,
    isUpdated,
  } = useContext(AuthContext);
  const realestate = "Real Estates";
  const technology = "Technology";
  const manufacturing = "Manufacturing";
  useEffect(() => {}, [isUpdated]);
  const activeLink =
    "block py-2 pl-3 pr-4 text-blue-700	 bg-[#867070] rounded md:bg-transparent md:text-blue md:p-0 md:dark:text-blue-700	";
  const normalLink =
    "block py-2 pl-3 pr-4 text-white focus:border-b-2 focus:border-[#867070]  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  return (
    <>
      <header>
        <nav className="bg-[#1c1d26] dark:bg-[#1c1d26] fixed w-full z-100 top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-50	 ">
          <div className=" relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img
                src="../src/Assets/Images/logo.png"
                className="h-10 w-32"
                alt="LOGO"
              />
            </Link>
            <div className="flex md:order-2">
              <div className=" leading-10 text-white mr-4"></div>
              {token && role == "company" ? (
                <Link to="/companyprofile">
                  <p className=" text-white leading-8 mr-4 ">
                    <i> {companyname} </i>
                  </p>
                </Link>
              ) : (
                <Link to="/userprofile" className=" text-white leading-8 mr-4 ">
                  <i> {username} </i>
                </Link>
              )}
              {!token ? (
                <Link to="/login">
                  <button
                    type="button"
                    className="text-white bg-[#E44C65] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#E44C65] dark:hover:bg-[#bea9a9] dark:focus:ring-[#867070]"
                  >
                    Sign In
                  </button>
                </Link>
              ) : (
                <Link
                  className="w-full"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(!isLoggedIn);
                    setCompanyName("");
                    setUsername("");
                    navigate("/");
                  }}
                >
                  <button
                    type="button"
                    className="text-white bg-[#E44C65] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#E44C65] dark:hover:bg-[#bea9a9] dark:focus:ring-[#867070]"
                  >
                    Logout
                  </button>
                </Link>
              )}{" "}
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className=" bg-[#1c1d26] dark:bg-[#1c1d26] flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  md:dark:bg-[#1c1d26] dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="dropdown">
                  <a className="dropbtn">Solutions⮛</a>
                  <div className="dropdown-content">
                    <Link to={`/solution/${realestate}`} className="mt-2">
                      Real-estate
                    </Link>
                    <Link to={`/solution/${technology}`} className="mt-2">
                      Technology
                    </Link>
                    <Link to={`/solution/${manufacturing}`} className="mt-2">
                      Manufacturing
                    </Link>
                  </div>
                </li>
                {/* <li>
                  <NavLink
                    to="/subscription"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Subscription
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactus"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
