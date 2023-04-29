import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Rating } from "@mui/material";

import "./Profile.css";
export default function UserProfile() {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="user-image">
          <img src="./src/Images/profile.png" />
        </div>
        <div className="profile-info-container">
          <div className="profile-info">
            <div className="user-titles">
              <span>Full Name</span>
              <span>Category/Industry</span>
              <span>Username</span>
              <span>Email Address</span>
              <span>Subscription</span>
            </div>
            <div className="user-info">
              <span>Hamzeh Dawahreh</span>
              <span>Technology</span>
              <span>Hamzeh_Da</span>
              <span>hmzhdawahreh@gmaill.com</span>
              <span>Jan- June 2023</span>
            </div>
            <div className="info-line">
              <p>YOUR INFORMATION</p>
            </div>
            <div className="edit-image">
              <img src="./src/Images/Edit.png" />
            </div>
          </div>
        </div>
        <hr />
        <div className="clients">
          <div className="current-clients">
            <h3>REQUESTED SERVICES</h3>

            <table>
              <tr>
                <th>Company</th>
                <th>Email</th>
                <th>Project</th>
                <th>Price</th>
                <th>Deadline</th>
              </tr>
              <tr>
                <td>CBRE inc.</td>
                <td>..@gmail.com</td>
                <td>Technology</td>
                <td>350JD</td>
                <td>may-2023</td>
              </tr>
              <tr>
                <td>KPMG</td>
                <td>..@gmail.com</td>
                <td>Real Estate</td>
                <td>200JD</td>
                <td>april-2023</td>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <br />
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
}