import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../Assets/Styles/subscription.css";
export default function Pricing() {
  return (
    <>
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
              <Link to="/checkout">
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
              <Link to="/checkout">
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
              <Link to="/checkout">
                <button type="button">Get Premium</button>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
