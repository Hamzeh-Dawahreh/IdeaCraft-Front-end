import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import RequestDialog from "../Components/Dialogs/Request-Dialog";
import Edit from "../Components/Dialogs/Edit-Dialog";
import "../Assets/Styles/profile.css";
import axios from "axios";
export default function CompanyProfile() {
  const [clients, setClients] = useState([]);

  const [userData, setUserData] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3500/users/getcompany`,
          config
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const getRequest = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3500/books/getRequest",
          config
        );
        setClients(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRequest();
  }, []);
  console.log(clients);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="profile-container">
        <div className="user-image">
          <img src="./src/Assets/Images/profile.png" />
        </div>
        <div className="profile-info-container">
          <div className="profile-info">
            <div className="user-titles">
              <span>Company Name</span>
              <span>Category/Industry</span>
              <span>Email Address</span>
              <span>Subscription</span>
            </div>
            <div className="user-info">
              <span>{userData && userData.companyname}</span>
              <span>{userData && userData.industry}</span>
              <span>{userData && userData.email}</span>
              <span>Jan- June 2023</span>
            </div>
            <div className="info-line">
              <p>
                4.5 <br />
                Your rating
              </p>
            </div>
            <Edit userData={userData} />
          </div>
        </div>
        <hr />
        <div className="clients">
          <div className="current-clients">
            <h3 className="text-2xl">CURRENT CLIENTS</h3>
            <br />
            <table>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Price</th>
                <th>Status</th>
                <th>Requests</th>
              </tr>
              {clients.bookings?.map((data, index) => {
                return (
                  <tr className="text-gray-500" key={index}>
                    <td>{data.user_id.username}</td>
                    <td>{data.user_id.email}</td>
                    <td>350JD</td>
                    <td>Approved</td>

                    <td>
                      <RequestDialog
                        userReq={data.userReq}
                        user_id={data.user_id._id}
                        service_id={data.service_id}
                      />
                    </td>
                  </tr>
                );
              })}
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
            <h3 className="text-2xl">PREVIOUS CLIENTS </h3>
            <br />
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
    </>
  );
}
