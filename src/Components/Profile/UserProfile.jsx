import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Rating } from "@mui/material";
import ConsentDialog from "./Consent-Dialog";
import "./Profile.css";
export default function UserProfile() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
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
            <h3 className="text-2xl">REQUESTED SERVICES</h3>
            <br />
            <table>
              <tr>
                <th>Company</th>
                <th>Email</th>
                <th>Project</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
              <tr className="text-gray-500">
                <td>CBRE inc.</td>
                <td>..@gmail.com</td>
                <td>Technology</td>
                <td>350JD</td>
                <br />
                <br />
                <ConsentDialog />
              </tr>
              <tr className="text-gray-500">
                <td>KPMG</td>
                <td>..@gmail.com</td>
                <td>Real Estate</td>
                <td>200JD</td>
                <br />
                <br />
                <ConsentDialog />
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
