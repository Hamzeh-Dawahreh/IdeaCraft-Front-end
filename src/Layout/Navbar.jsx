import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Assets/Styles/navbar.css";

export default function Navbar() {
  const activeLink =
    "block py-2 pl-3 pr-4 text-blue-700	 bg-[#867070] rounded md:bg-transparent md:text-blue md:p-0 md:dark:text-blue-700	";
  const normalLink =
    "block py-2 pl-3 pr-4 text-white focus:border-b-2 focus:border-[#867070]  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className="bg-[#1c1d26] dark:bg-[#1c1d26] fixed w-full z-100 top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-50	 ">
          <div className=" relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img
                src="./src/Assets/Images/logo.png"
                className="h-10 w-32"
                alt="LOGO"
              />
            </Link>
            <div className="flex md:order-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.sessionStorage.clear();
                  // setIsLogin(false);
                  navigate("/login");
                }}
                type="button"
                className="text-white bg-[#E44C65] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#E44C65] dark:hover:bg-[#bea9a9] dark:focus:ring-[#867070]"
              >
                {JSON.parse(window.sessionStorage.getItem("isLogin"))
                  ? "Logout"
                  : "Sign In"}
              </button>
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
                {/* <li>
                  <NavLink
                    to="ProductsPage"
                    className="dropdown"
                  >
                    Solutions⮛
                  </NavLink>
                </li> */}
                <li class="dropdown">
                  <a href="javascript:void(0)" class="dropbtn">
                    Solutions⮛
                  </a>
                  <div class="dropdown-content">
                    <a href="/realestate" className="mt-2">
                      Real-estate
                    </a>
                    <a href="/technology" className="mt-2">
                      Technology
                    </a>
                    <a href="/manufacturing" className="mt-2">
                      Manufacturing
                    </a>
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/subscription"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Subscription
                  </NavLink>
                </li>
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
