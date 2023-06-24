import { Rating } from "@mui/material";
import Dialog from "../Components/Dialogs/Book-Dialog";
import "../Assets/Styles/solution.css";
import { useEffect } from "react";
import axios from "axios";
export default function RealEstate() {
  useEffect(async () => {
    const response = await axios.get(
      "http://localhost:3500/form/getRealEstate"
    );
    console.log(response.data);
  }, []);
  return (
    <>
      {" "}
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
          {/* <div className="company-card">
            <img src="./src/Assets/Images/CBRE.png" />
            <div className="info">
              <p>
                CBRE Group, Inc. is an American commercial real estate services
                and investment firm. The abbreviation CBRE stands for Coldwell
                Banker Richard Ellis. It is the world's largest commercial real
                estate services and investment firm <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>
                *CBRE Group has made 39 feasibility study on the website.*
              </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
              </div>
            </div>
          </div> */}
          {/* <div className="company-card">
            <img src="./src/Assets/Images/BDO.png" />
            <div className="info">
              <p>
                BDO USA, LLP is the United States member firm of BDO
                International, a global accounting network. The company is
                headquartered in Chicago. The firm adopted its current moniker
                in 1973, each letter corresponding to a surname of an original
                founder of the corporation: Binder, Dijker. <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>*BDO USA has made 20 feasibility study on the website.* </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
              </div>
            </div>
          </div> */}
          {/* <div className="company-card">
            <img src="./src/Assets/Images/CBRE.png" />
            <div className="info">
              <p>
                CBRE Group, Inc. is an American commercial real estate services
                and investment firm. The abbreviation CBRE stands for Coldwell
                Banker Richard Ellis. It is the world's largest commercial real
                estate services and investment firm <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>
                *CBRE Group has made 39 feasibility study on the website.*
              </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
