import React from "react";
export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark custom-nav pe-3">
        <a className="navbar-brand" href="index.html">
          <div className="logo-container">
            <img
              src="./src/Images/logo.png"
              alt="logo"
              width="55"
              height="40"
            />
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
                <a className="nav-link me-3" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="about.html">
                  <div className="dropdown">
                    <span>Solutions⮛</span>
                    <div className="dropdown-content">
                      <p>Real-estate</p>
                      <p>Technology</p>
                      <p>Manufacturing</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="about.html">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3" href="Contact us.html">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-item Register-Container">
            <li>
              <a href="" className="nav-link me-3 Register">
                Join us
              </a>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}
