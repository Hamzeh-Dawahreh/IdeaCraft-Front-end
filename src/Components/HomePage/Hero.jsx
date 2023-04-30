import React from "react";
export default function Hero() {
  return (
    <div className="Hero">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="line-1">
            <hr />
          </div>
          <div className="carousel-item active " data-bs-interval="3000">
            <img
              src="/src/Images/bg1.png"
              className="d-block w-100"
              alt="Image"
            />
            <div className="hero-article-1 ">
              <p className="first-p"> DID YOU KNOW ? </p>
              <p className="second-p">
                Feasibility studies are crucial to determining the success of a
                project, according to 58% of real estate professionals.
                <div className=" first animate__animated animate__headShake animate__infinite">
                  <a href="#importance">
                    {" "}
                    Read more <span className="arrow-green ">→ </span>
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="/src/Images/bg2.png"
              className="d-block w-100"
              alt="Image"
            />
            <div className="hero-article-2">
              <p className="first-p">DID YOU KNOW ? </p>{" "}
              <p className="second-p">
                Feasibility studies increase success rates by 60% in technology.{" "}
                <br />{" "}
                <div className=" first animate__animated animate__headShake animate__infinite">
                  <a href="#importance">
                    {" "}
                    Read more <span className="arrow-green ">→ </span>
                  </a>
                </div>
              </p>{" "}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="/src/Images/bg3.png"
              className="d-block w-100"
              alt="Image"
            />
            <div className="hero-article-3">
              <p className="first-p">DID YOU KNOW ? </p>{" "}
              <p className="second-p">
                75% of manufacturers believe that conducting a feasibility study
                is essential to project success. <br />{" "}
                <div className=" first animate__animated animate__headShake animate__infinite">
                  <a href="#importance">
                    {" "}
                    Read more <span className="arrow-green ">→ </span>
                  </a>
                </div>
              </p>{" "}
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}
