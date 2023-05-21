import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";

import "./pricing.css";
export default function Pricing() {
  return (
    <>
      <Navbar />
      {/* <div className="pricing-body">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 className="">For Companies</h3>
        <hr />
        <div className="pricing-cards-container">
          <div className="pricing-card-company">
            <div>
              <h3>1 Month</h3>
              <h4>$19.99 / month</h4>
            </div>
            <div>
              <ul>
                <li>Create and post up to 5 feasibility studies.</li>
                <li>
                  Receive direct requests for consultation from potential
                  clients.
                </li>
                <li>Basic listing in our provider directory.</li>
                <li>Automatic renewal option available.</li>
              </ul>
            </div>
            <div>
              <Link to="/payment" className="link">
                <button className="start-button">Start now</button>
              </Link>{" "}
            </div>
          </div>
          <div className="pricing-card-company">
            <div className="discount">12% Discount</div>
            <div>
              <h3>6 Month</h3>
              <h4>$104.99 / 6months</h4>
            </div>
            <div>
              <ul>
                <li>Create and post up to 15 feasibility studies</li>
                <li>
                  Receive direct requests for consultation from potential
                  clients
                </li>
                <li>Priority listing in our provider directory.</li>
                <li>Discounted pricing compared to monthly subscription</li>
                <li>Automatic renewal option available</li>
              </ul>
            </div>
            <div>
              <Link to="/payment" className="link">
                <button className="start-button">Start now</button>
              </Link>{" "}
            </div>
          </div>
          <div className="pricing-card-company">
            <div className="discount">30% Discount</div>
            <br />
            <div>
              <h3>1 Year</h3>
              <h4>$167.99 / year</h4>
            </div>
            <div>
              <ul>
                <li>Create and post up to 30 feasibility studies</li>
                <li>
                  Receive direct requests for consultation from potential
                  clients
                </li>
                <li>Priority listing in our provider directory</li>
                <li>
                  Option to promote 2 study per month on our <br /> social media
                  channels
                </li>
                <li>
                  Option to participate in webinars and workshops as a speaker
                </li>
                <li>Discounted pricing compared to monthly subscription</li>
                <li>Automatic renewal option available</li>
              </ul>
            </div>
            <div>
              <Link to="/payment" className="link">
                <button className="start-button">Start now</button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div> */}
      <div className="pricing-container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="wrapper">
          <div class="card">
            <div class="card-title">
              <h3>Basic</h3>
              <h4>
                A comprehensive analysis of your project's potential, covering
                key aspects such as market research, cost assessment, and risk
                analysis.
              </h4>
            </div>
            <div class="card-price">
              <h1>
                $12.99
                <small>/month</small>
              </h1>
            </div>
            <div class="card-description">
              <ul>
                <li>Detailed market research report</li>
                <li>Cost estimation and financial analysis</li>
                <li>Risk assessment and mitigation strategies</li>
                <li>Praesent non sapien laoreet</li>
              </ul>
            </div>
            <div class="card-action">
              <Link to="/payment">
                <button type="button">Get Basic</button>
              </Link>
            </div>
          </div>
          <div class="card popular">
            <div class="card-ribbon">
              <span>most popular</span>
            </div>
            <div class="card-title">
              <h3>Pro</h3>
              <h4>
                Our recommended option for a thorough feasibility study,
                providing in-depth insights and expert guidance.
              </h4>
            </div>
            <div class="card-price">
              <h1>
                $15.99
                <small>/month</small>
              </h1>
            </div>
            <div class="card-description">
              <ul>
                <li>Comprehensive market analysis and competitor research</li>
                <li>Detailed financial projections and investment appraisal</li>
                <li>SWOT analysis and risk management plan</li>
              </ul>
            </div>
            <div class="card-action">
              <Link to="/payment">
                <button type="button">Get Pro</button>
              </Link>
            </div>
          </div>
          <div class="card">
            <div class="card-title">
              <h3>Premium</h3>
              <h4>
                Duis quis sem auctor, convallis felis vitae, placerat sapien.
              </h4>
            </div>
            <div class="card-price">
              <h1>
                $20.99
                <small>month</small>
              </h1>
            </div>
            <div class="card-description">
              <ul>
                <li>Customized market research and industry analysis</li>
                <li>Advanced financial modeling and scenario analysis</li>
                <li>Expert consultation and strategic recommendations</li>
              </ul>
            </div>
            <div class="card-action">
              <Link to="/payment">
                <button type="button">Get Premium</button>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
