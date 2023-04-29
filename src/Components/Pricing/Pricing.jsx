import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";

import "./pricing.css";
export default function Pricing() {
  return (
    <>
      <Navbar />
      <div className="pricing-body">
        <br />
        <br />
        <br />
        <h1>Simple Pricing</h1>
        <br />
        <br />
        <br />
        <br />
        <h3>For Companies</h3>
        <hr />
        <div className="cards-container">
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
        <h3>For Users</h3>

        <hr />
        <div className="cards-container">
          <div className="pricing-card-user">
            <div>
              <h3>1 Month</h3>
              <h4>$9.99 / month</h4>
            </div>
            <div className="card-description">
              For small teams that want to accelerate their design work.
            </div>
            <div>
              <Link to="/payment" className="link">
                <button className="start-button">Start now</button>
              </Link>{" "}
            </div>
          </div>
          <div className="pricing-card-user">
            <div className="discount">12% Discount</div>

            <div>
              <h3>6 Month</h3>
              <h4>$49.99 / 6month</h4>
            </div>
            <div className="card-description">
              For fast-growing companies that aim to scale across multiple
              teams.{" "}
            </div>
            <div>
              <Link to="/payment" className="link">
                <button className="start-button">Start now</button>
              </Link>{" "}
            </div>
          </div>
          <div className="pricing-card-user">
            <div className="discount">12% Discount</div>

            <div>
              <h3>1 Year</h3>
              <h4>$83.99 / year</h4>
            </div>
            <div className="card-description">
              For fast-growing companies that aim to scale across multiple
              teams.{" "}
            </div>
            <div>
              <Link to="/payment" className="link">
                <button className="start-button">Start now</button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
