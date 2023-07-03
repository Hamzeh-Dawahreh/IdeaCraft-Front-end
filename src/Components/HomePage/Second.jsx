import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import axios from "axios";
// Default theme
import "@splidejs/splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";

// or only core styles
import "@splidejs/splide/css/core";
export default function Second() {
  const [data, setData] = useState([]);
  // new Splide(".splide").mount();
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3500/form/getTopRatedCompanies"
        );

        setData(response.data);
      } catch (error) {
        console.log("Error retrieving data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="welcome-section">
      <h2 className="home-title text-3xl mt-20">MOST RATED COMPANIES</h2>
      <br />
      <div className="line-2"></div>
      <Splide hasTrack={false} options={options}>
        <SplideTrack>
          {data.reduce((slides, item, index) => {
            if (index % 3 === 0) {
              const slideData = data.slice(index, index + 3);
              slides.push(
                <SplideSlide key={index}>
                  <div className="cards">
                    {slideData.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="card-container max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                      >
                        <img
                          className="rounded-t-lg"
                          src="/src/Assets/Images/CBRE.png"
                          alt=""
                        />
                        <div className="p-5">
                          <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {subItem.companyname}
                            </h5>
                          </a>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {subItem.applicationForm.description}
                          </p>
                          <div className="rating-category mt-4 text-white">
                            <Rating
                              name="read-only"
                              value={`${subItem.rating}`}
                              readOnly
                            />
                            <p>({subItem.rating})</p>
                          </div>
                          <br />
                          <div className="flex justify-between">
                            <div className="text-white font-semibold text-sm">
                              Category - {subItem.industry}
                            </div>
                            <a
                              href="#"
                              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Book now
                              <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SplideSlide>
              );
            }
            return slides;
          }, [])}
        </SplideTrack>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button className="splide__toggle" type="button">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button>
      </Splide>

      <br />
      <br />
      <br />
      <br />
      <h2 className="home-title mt-5 text-3xl " id="importance">
        Make Your Project Succeed
      </h2>
      <br />
      <div className="line-2"></div>
      <div className="importance-container">
        <p className="importance-first">
          Feasibility studies are critical for project success and cost savings.
          Businesses that conduct feasibility studies have an 80% success rate
          compared to only 20% for those that do not. Additionally, every dollar
          invested in feasibility studies can save up to $100 in construction
          costs. Don't overlook the benefits of conducting a thorough
          feasibility study for your project. Here is how :
        </p>
        <p className="importance-second">
          1- Mitigating Risks: Feasibility studies help to identify potential
          risks and challenges associated with a proposed project. By
          identifying these risks early on, stakeholders can develop strategies
          to mitigate them, reducing the likelihood of costly delays or
          failures.
        </p>
        <p className="importance-third">
          {" "}
          2- Better Decision Making: Feasibility studies provide stakeholders
          with valuable insights into a proposed project, enabling them to make
          better-informed decisions. This can help to ensure that the project is
          aligned with the organization's goals and objectives.
        </p>
        <p className="importance-fourth">
          3- Project Viability: Feasibility studies help to evaluate the
          viability of a project, determining whether it is likely to generate a
          satisfactory return on investment. This is particularly important for
          businesses, which must balance the potential profits of a project
          against the associated costs.
        </p>
        <p className="importance-fifth">
          4- Cost Control: Feasibility studies enable stakeholders to estimate
          the cost of a project accurately. This allows them to develop a
          realistic budget and ensure that the project is completed within the
          allocated resources.
        </p>
      </div>
    </div>
  );
}
