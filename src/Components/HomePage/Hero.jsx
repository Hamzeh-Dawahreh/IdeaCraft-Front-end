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
          <div className="relative">
            <img
              src="/src/Assets/Images/bg1.png"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <p className="text-5xl">DID YOU KNOW ? </p>
              <p className="second-p">
                Feasibility studies are crucial to determining the success of a
                project, according to 58% of real estate professionals. <br />{" "}
                <br />
                <div className=" first animate__animated animate__headShake animate__infinite">
                  {" "}
                  <Link
                    to="/realestate"
                    className="relative inline-flex items-center px-3 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-white hover:text-white group hover:bg-gray-50"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-red-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-8 h-10  duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative transition-all duration-700 ease group-hover:px-3 mr-3">
                      Learn More
                    </span>
                  </Link>
                </div>{" "}
              </p>{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src="/src/Assets/Images/bg2.png"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <p className="text-5xl">DID YOU KNOW ? </p>
              <p className="second-p">
                Feasibility studies are crucial to determining the success of a
                project, according to 58% of real estate professionals. <br />{" "}
                <br />
                <div className=" first animate__animated animate__headShake animate__infinite">
                  {" "}
                  <Link
                    to="/realestate"
                    className="relative inline-flex items-center px-3 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-white hover:text-white group hover:bg-gray-50"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-red-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-8 h-10  duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative transition-all duration-700 ease group-hover:px-3 ">
                      Learn More
                    </span>
                  </Link>
                </div>{" "}
              </p>{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src="/src/Assets/Images/bg3.png"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <p className="text-5xl">DID YOU KNOW ? </p>
              <p className="second-p">
                Feasibility studies are crucial to determining the success of a
                project, according to 58% of real estate professionals. <br />{" "}
                <br />
                <div className=" first animate__animated animate__headShake animate__infinite">
                  {" "}
                  <Link
                    to="/realestate"
                    className="relative inline-flex items-center px-3 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-white hover:text-white group hover:bg-gray-50"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-red-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-8 h-10  duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative transition-all duration-700 ease group-hover:px-3 mr-3">
                      Learn More
                    </span>
                  </Link>
                </div>{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
