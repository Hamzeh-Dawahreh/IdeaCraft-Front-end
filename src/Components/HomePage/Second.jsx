import React from "react";
import { Rating } from "@mui/material";
export default function Second() {
  return (
    <div className="welcome-section">
      <div className="welcome-paragraph">
        <p className="company-description">
          Welcome to{" "}
          <span className="company-name"> FROM IDEA TO RENDER(FITR),</span>
          <br />
          <br />
          the leading platform for connecting expert companies with clients in
          need of high-quality feasibility studies. Our platform makes it easy
          for you to find the right feasibility study for your industry or
          category, whether you're in real estate, manufacturing or technology.
        </p>
      </div>
      <div className="welcome-image">
        <img src="/src/Images/Welcome-section.png" alt="image" />
      </div>
      <h2 className="home-title">MOST RATED COMPANIES</h2>
      <div className="line-2"></div>
      <div className="cards-container">
        <div className="card-container">
          <img
            src="/src/Images/CBRE.png"
            alt="image"
            width={350}
            className="mt-4"
          />
          <p className="company-description">
            CBRE Group, Inc. is an American commercial real estate services and
            investment firm. The abbreviation CBRE stands for Coldwell Banker
            Richard Ellis. It is the world's largest commercial real estate
            services and investment firm.
          </p>
          <div className="rating-category">
            <Rating name="read-only" value="3" readOnly />

            <p>Category - Real Estate</p>
          </div>
        </div>

        <div className="card-container">
          {" "}
          <img
            src="/src/Images/BDO.png"
            alt="image"
            width={350}
            className="mt-4"
          />
          <p className="company-description">
            BDO USA, LLP is the United States member firm of BDO International,
            a global accounting network. The firm adopted its current moniker in
            1973, each letter corresponding to a surname of an original founder
            of the corporation: Binder, Dijker.
          </p>
          <div className="rating-category">
            <Rating name="read-only" value="3" readOnly />
            <p>Category - Real Estate</p>
          </div>
        </div>
        <div className="card-container second-row">
          {" "}
          <img src="/src/Images/Deloitte.png" alt="image" width={350} />
          <p className="company-description">
            Deloitte Touche Tohmatsu Limited, commonly referred to as Deloitte,
            is an international professional services network headquartered in
            London England.international professional services network
            headquartered in London England.
          </p>
          <div className="rating-category">
            <Rating name="read-only" value="5" readOnly />
            <p>Category - Technology</p>
          </div>
        </div>
        <div className="card-container second-row">
          {" "}
          <img src="/src/Images/KPMG.png" alt="image" width={350} />
          <p className="company-description">
            KPMG International Limited is a multinational professional services
            network, and one of the Big Four accounting organizations. KPMG
            International Limited is a multinational professional services
            network, and one of the Big Four accounting organizations.
          </p>
          <div className="rating-category">
            <Rating name="read-only" value="4" readOnly />
            <p>Category - Technology</p>
          </div>
        </div>
        <div className="card-container last-row">
          <img src="/src/Images/LEK.png" alt="image" width={350} />
          <p className="company-description">
            L.E.K. Consulting is a global strategy consulting firm based in
            London and Boston. Founded in 1983 by three partners from Bain &
            Company, L.E.K. focuses on corporate strategy, marketing and sales,
            mergers and acquisitions.
          </p>
          <div className="rating-category">
            <Rating name="read-only" value="5" readOnly />
            <p>Category - Manufacturing</p>
          </div>
        </div>
        <div className="card-container last-row">
          {" "}
          <img
            src="/src/Images/Navigant.png"
            alt="image"
            width={350}
            className="mt-3"
          />
          <p className="company-description">
            Navigant Consulting, Inc. was an American management consultancy
            firm. It had offices in Asia, Europe and North America. The stock
            was a component of the S&P 600 index.
          </p>
          <div className="rating-category">
            <Rating name="read-only" value="4" readOnly />
            <p>Category - Manufacturing</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2 className="home-title mt-5 " id="importance">
        How Feasibility Studies Can Help Your Project Succeed
      </h2>
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
