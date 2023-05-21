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
            src="/src/Images/bg1.png"
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
            src="/src/Images/bg2.png"
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
            src="/src/Images/bg3.png"
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
    // <div className="Hero">
    //   <div
    //     id="carouselExampleIndicators"
    //     className="carousel slide carousel-fade"
    //     data-bs-ride="carousel"
    //   >
    //     <div className="carousel-indicators">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>

    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //     </div>
    //     <div className="carousel-inner">
    //       <div className="line-1">
    //         <hr />
    //       </div>
    //       <div className="carousel-item active " data-bs-interval="3000">
    //         <img
    //           src="/src/Images/bg1.png"
    //           className="d-block w-100"
    //           alt="Image"
    //         />
    //         <div className="hero-article-1 ">
    //           <p className="first-p"> DID YOU KNOW ? </p>
    //           <p className="second-p">
    //             Feasibility studies are crucial to determining the success of a
    //             project, according to 58% of real estate professionals.
    //             <div className=" first animate__animated animate__headShake animate__infinite">
    //               <Link to="/realestate">
    //                 {" "}
    //                 Read more <span className="arrow-green ">→ </span>
    //               </Link>
    //             </div>
    //           </p>
    //         </div>
    //       </div>
    //       <div className="carousel-item" data-bs-interval="3000">
    //         <img
    //           src="/src/Images/bg2.png"
    //           className="d-block w-100"
    //           alt="Image"
    //         />
    //         <div className="hero-article-2">
    //           <p className="first-p">DID YOU KNOW ? </p>{" "}
    //           <p className="second-p">
    //             Feasibility studies increase success rates by 60% in technology.{" "}
    //             <br />{" "}
    //             <div className=" first animate__animated animate__headShake animate__infinite">
    //               <Link to="/technology">
    //                 {" "}
    //                 Read more <span className="arrow-green ">→ </span>
    //               </Link>
    //             </div>
    //           </p>{" "}
    //         </div>
    //       </div>
    //       <div className="carousel-item" data-bs-interval="3000">
    //         <img
    //           src="/src/Images/bg3.png"
    //           className="d-block w-100"
    //           alt="Image"
    //         />
    //         <div className="hero-article-3">
    //           <p className="first-p">DID YOU KNOW ? </p>{" "}
    //           <p className="second-p">
    //             75% of manufacturers believe that conducting a feasibility study
    //             is essential to project success. <br />{" "}
    //             <div className=" first animate__animated animate__headShake animate__infinite">
    //               <Link to="/manufacturing">
    //                 {" "}
    //                 Read more <span className="arrow-green ">→ </span>
    //               </Link>
    //             </div>
    //           </p>{" "}
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="next"
    //     >
    //       {/* <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span> */}
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
  );
}
