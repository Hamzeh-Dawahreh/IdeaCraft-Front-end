import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

export default function Hero() {
  return (
    <>
      <br />
      <br />

      <Carousel
        transition={{ duration: 1.5 }}
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div>
          <img
            src="/src/Assets/Images/bg1.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="hero-article-1 ">
            <p className="first-p"> DID YOU KNOW ? </p>{" "}
            <p className="second-p">
              Feasibility studies are crucial to determining the success of a
              project, according to 58% of real estate professionals. <br />{" "}
              <br />
              <div className=" first animate__animated animate__headShake animate__infinite">
                {" "}
                <Link to="/realestate">
                  Read more <span className="arrow-green ">→ </span>{" "}
                </Link>{" "}
              </div>{" "}
            </p>{" "}
          </div>
        </div>
        <div>
          <img
            src="/src/Assets/Images/bg2.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="hero-article-1 ">
            <p className="first-p"> DID YOU KNOW ? </p>{" "}
            <p className="second-p">
              Feasibility studies are crucial to determining the success of a
              project, according to 58% of real estate professionals. <br />{" "}
              <br />
              <div className=" first animate__animated animate__headShake animate__infinite">
                {" "}
                <Link to="/realestate">
                  Read more <span className="arrow-green ">→ </span>{" "}
                </Link>{" "}
              </div>{" "}
            </p>{" "}
          </div>
        </div>
        <div>
          <img
            src="/src/Assets/Images/bg3.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="hero-article-1 ">
            <p className="first-p"> DID YOU KNOW ? </p>{" "}
            <p className="second-p">
              Feasibility studies are crucial to determining the success of a
              project, according to 58% of real estate professionals. <br />{" "}
              <br />
              <div className=" first animate__animated animate__headShake animate__infinite">
                {" "}
                <Link to="/realestate">
                  Read more <span className="arrow-green ">→ </span>{" "}
                </Link>{" "}
              </div>{" "}
            </p>{" "}
          </div>
        </div>
      </Carousel>
    </>
  );
}
