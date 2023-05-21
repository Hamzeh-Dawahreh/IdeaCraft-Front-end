import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Rating } from "@mui/material";
import Dialog from "./Book-Dialog";

import "./solution.css";
export default function Technology() {
  return (
    <>
      <Navbar />
      <div className="solution-container">
        <br />
        <br />
        <br />
        <div className="hero-solution">
          <div className="intro">
            <h6>For Technology</h6>
            <br />
            <h4>
              {" "}
              Feasibility studies for technology projects involve analyzing the
              potential profitability and market demand of a proposed technology
              product or service. This includes assessing factors such as
              development costs, intellectual property protection, potential
              markets, and projected revenue.
            </h4>
            <br />

            <button className="book-now first animate__animated animate__pulse animate__infinite">
              {" "}
              <a href="#booking"> Book now</a>
            </button>
          </div>
          <img src="./src/Images/Technology-cover.png" />
        </div>
        <br />
        <br />
        <div className="our-companies">
          <h1 id="booking" className="text-3xl	">
            Our Companies
          </h1>
          <br /> <div className="line-2"></div>
          <div className="company-card">
            <img src="./src/Images/Deloitte.png" />
            <div className="info">
              <p>
                Deloitte Touche Tohmatsu Limited, commonly referred to as
                Deloitte, is an international professional services network
                headquartered in London England.
                <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>*Deloitte has made 9 feasibility study on the website.* </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
              </div>
            </div>
          </div>
          <div className="company-card">
            <img src="./src/Images/KPMG.png" />
            <div className="info">
              <p>
                KPMG International Limited is a multinational professional
                services network, and one of the Big Four accounting
                organizations. <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>*KPMG has made 13 feasibility study on the website.* </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
              </div>
            </div>
          </div>
          <div className="company-card">
            <img src="./src/Images/Deloitte.png" />
            <div className="info">
              <p>
                Deloitte Touche Tohmatsu Limited, commonly referred to as
                Deloitte, is an international professional services network
                headquartered in London England. <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>*Deloitte has made 9 feasibility study on the website.* </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
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
