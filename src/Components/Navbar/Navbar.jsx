import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <header>
        {" "}
        <nav className="navbar navbar-expand-lg navbar-dark custom-nav pe-3">
          <a className="navbar-brand" href="index.html">
            <div className="logo-container">
              <Link to="/" className="link">
                <img
                  src="./src/Images/logo.png"
                  alt="logo"
                  width="80"
                  height="58"
                />
              </Link>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="nav-item Items-Container">
              <ul className="navbar-nav" id="ul">
                <li className="nav-item">
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-3" href="about.html">
                    <div className="dropdown">
                      <span>Solutions⮛</span>
                      <div className="dropdown-content">
                        <Link className="link" to="/realestate">
                          <p className="nav-solution">Real-estate</p>
                        </Link>
                        <Link className="link" to="/technology">
                          <p className="nav-solution">Technology</p>
                        </Link>

                        <Link className="link" to="/manufacturing">
                          <p className="nav-solution">Manufacturing</p>
                        </Link>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/contactus">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-item Register-Container">
              <li>
                <Link className="link" target="_blank" to="/login">
                  {" "}
                  Join us
                </Link>
              </li>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
