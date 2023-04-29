import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Rating } from "@mui/material";

import "./solution.css";
export default function RealEstate() {
  return (
    <>
      <Navbar />
      <div className="solution-container">
        <br />
        <br />
        <br />
        <div className="hero-solution">
          <div className="intro">
            <h6>For Real estates</h6>
            <h4>
              {" "}
              Feasibility studies for real estate projects involve analyzing the
              potential profitability of a property development. This includes
              assessing factors such as location, market demand, construction
              costs, and projected revenue.
            </h4>
            <button className="book-now first animate__animated animate__pulse animate__infinite">
              <a href="#booking"> Book now</a>
            </button>
          </div>
          <img src="./src/Images/real-estatePage.png" />
        </div>
        <br />
        <br />
        <div className="our-companies">
          <h1 id="booking">Our Companies</h1>
          <div className="line-2"></div>

          <div className="company-card">
            <img src="./src/Images/CBRE.png" />
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
                <button className="company-book">Book</button>
              </div>
            </div>
          </div>
          <div className="company-card">
            <img src="./src/Images/BDO.png" />
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
                <button className="company-book">Book</button>
              </div>
            </div>
          </div>
          <div className="company-card">
            <img src="./src/Images/CBRE.png" />
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
                <button className="company-book">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
