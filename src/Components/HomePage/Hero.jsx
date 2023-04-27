import React from "react";
export default function Hero() {
  return (
    <div className="Hero">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators">
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
        </div> */}
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
              <p className="first-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="second-p">
                Omnis repudiandae necessitatibus impedit deleniti. Learn more →
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              <br />
              Omnis repudiandae necessitatibus impedit deleniti. Learn more →
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="/src/Images/bg3.png"
              className="d-block w-100"
              alt="Image"
            />
            <div className="hero-article-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              <br />
              Omnis repudiandae necessitatibus impedit deleniti. Learn more →
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
