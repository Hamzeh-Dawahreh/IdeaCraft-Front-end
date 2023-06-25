import "../Assets/Styles/solution.css";
import { Rating } from "@mui/material";
import Dialog from "../Components/Dialogs/Book-Dialog";
import Pagination from "@mui/material/Pagination";

import { useEffect, useState } from "react";
import axios from "axios";
export default function RealEstate() {
  const [companyData, setCompanyData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3500/form/getRealEstate"
        );
        setCompanyData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <br />
      <br />
      <div className="solution-container">
        <br />
        <br />
        <br />
        <div className="hero-solution">
          <div className="intro">
            <h6>For Real estates</h6>
            <br />

            <h4>
              {" "}
              Feasibility studies for real estate projects involve analyzing the
              potential profitability of a property development. This includes
              assessing factors such as location, market demand, construction
              costs, and projected revenue.
            </h4>
            <br />

            <button className="book-now first animate__animated animate__pulse animate__infinite">
              <a href="#booking"> Book now</a>
            </button>
          </div>
          <img src="./src/Assets/Images/real-estatePage.png" />
        </div>
        <br />
        <br />
        <div className="our-companies">
          <h1 id="booking" className="text-3xl	">
            Our Companies
          </h1>
          <br /> <div className="line-2"></div>
          {companyData?.map((data) => {
            return (
              <div className="company-card">
                {data.Images?.slice(0, 1).map((image, index) => (
                  <img
                    alt="image"
                    src={`http://localhost:3500/${image}`}
                    className="w-full h-full rounded-xl object-fit shadow-lg max-w-full"
                    key={index}
                  />
                ))}
                <div className="info">
                  <div>
                    <p>{data.description}</p>
                    <i>
                      {" "}
                      <p className=" text-gray-500 text-sm">
                        Location : {data.country}/{data.city}
                      </p>{" "}
                    </i>
                  </div>
                  <div className="flex text-gray-500  text-sm ">
                    <div>Email:</div>
                    <div>{data.email}</div>
                    <div className=" ml-4">Phone:</div>
                    <div>{data.phone}</div>
                  </div>
                  <h6>
                    *CBRE Group has made 39 feasibility study on the website.*
                  </h6>
                  <div className="company-rating">
                    <Rating name="read-only" value="3" readOnly />
                    <Dialog />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className=" flex justify-center">
        <Pagination className=" mt-20" count={10} color="primary" />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
