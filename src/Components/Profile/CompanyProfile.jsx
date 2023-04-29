import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Rating } from "@mui/material";

import "./Profile.css";
export default function CompanyProfile() {
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
              <span>Company Name</span>
              <span>Category/Industry</span>
              <span>Username</span>
              <span>Email Address</span>
              <span>Subscription</span>
            </div>
            <div className="user-info">
              <span>CBRE</span>
              <span>Real-estate</span>
              <span>CBRE</span>
              <span>CBRE@gmaill.com</span>
              <span>Jan- June 2023</span>
            </div>
            <div className="info-line">
              <p>
                4.5 <br />
                Your rating
              </p>
            </div>
            <div className="edit-image">
              <img src="./src/Images/Edit.png" />
            </div>
          </div>
        </div>
        <hr />
        <div className="clients">
          <div className="current-clients">
            <h3>CURRENT CLIENTS</h3>

            <table>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Project</th>
                <th>Price</th>
                <th>Deadline</th>
              </tr>
              <tr>
                <td>Elon</td>
                <td>..@gmail.com</td>
                <td>Alpha</td>
                <td>350JD</td>
                <td>may-2023</td>
              </tr>
              <tr>
                <td>Ali</td>
                <td>..@gmail.com</td>
                <td>DBS</td>
                <td>200JD</td>
                <td>april-2023</td>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <br />
          <hr />
          <div className="previous-clients">
            <br />
            <br />
            <br />
            <h3>PREVIOUS CLIENTS </h3>

            <table>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Project</th>
                <th>Price</th>
                <th>Rating</th>
              </tr>
              <tr>
                <td>Ali</td>
                <td>..@gmail.com</td>
                <td>Alpha</td>
                <td>350JD</td>
                <td>
                  {" "}
                  <Rating name="read-only" value="5" readOnly />
                </td>
              </tr>
              <tr>
                <td>Jamal</td>
                <td>..@gmail.com</td>
                <td>DBS</td>
                <td>150JD</td>
                <td>
                  {" "}
                  <Rating name="read-only" value="4" readOnly />
                </td>
              </tr>
              <tr>
                <td>Steve</td>
                <td>..@gmail.com</td>
                <td>ASDF</td>
                <td>100JD</td>
                <td>
                  {" "}
                  <Rating name="read-only" value="5" readOnly />
                </td>
              </tr>
              <tr>
                <td>Mahmoud</td>
                <td>..@gmail.com</td>
                <td>ABC</td>
                <td>250JD</td>
                <td>
                  {" "}
                  <Rating name="read-only" value="3" readOnly />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
