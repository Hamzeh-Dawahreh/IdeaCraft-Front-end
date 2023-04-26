import React from "react";
export default function Hero() {
  return (
    <div className="Hero">
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="line-1">
            <hr />
          </div>
          <div class="carousel-item active">
            <img src="/src/Images/bg1.png" class="d-block w-100" alt="Image" />
            <div className="hero-article-1 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              <br />
              Omnis repudiandae necessitatibus impedit deleniti. Learn more →
            </div>
          </div>
          <div class="carousel-item">
            <img src="/src/Images/bg2.png" class="d-block w-100" alt="Image" />
            <div className="hero-article-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              <br />
              Omnis repudiandae necessitatibus impedit deleniti. Learn more →
            </div>
          </div>
          <div class="carousel-item">
            <img src="/src/Images/bg3.png" class="d-block w-100" alt="Image" />
            <div className="hero-article-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              <br />
              Omnis repudiandae necessitatibus impedit deleniti. Learn more →
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
