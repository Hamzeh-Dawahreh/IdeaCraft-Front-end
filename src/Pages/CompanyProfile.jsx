import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import RequestDialog from "../Components/Dialogs/Request-Dialog";
import Edit from "../Components/Dialogs/Edit-Dialog";
import "../Assets/Styles/profile.css";
import axios from "axios";
export default function CompanyProfile() {
  const [clients, setClients] = useState([]);
  const [status, setStatus] = useState(false);

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
  }, [status]);
  console.log(status);
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
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Company Approval</th>
                  <th>User Approval</th>
                  <th>Requests</th>
                </tr>
              </thead>
              {clients.bookings?.map((data, index) => {
                return (
                  <tbody key={index}>
                    <tr className="text-gray-500">
                      <td>{data.user_id.username}</td>
                      <td>{data.user_id.email}</td>
                      <td className=" text-green-500">
                        {data.price || "--"} JOD
                      </td>
                      <td>
                        {data.companyConsent === undefined
                          ? "Pending"
                          : data.companyConsent === true
                          ? "Approved"
                          : "Rejected"}
                      </td>
                      <td>
                        {data.userConsent === undefined
                          ? "Pending"
                          : data.userConsent === true
                          ? "Approved"
                          : "Rejected"}
                      </td>

                      <td>
                        <RequestDialog
                          userReq={data.userReq}
                          user_id={data.user_id._id}
                          service_id={data.service_id}
                          companyRes={data.companyRes}
                          price={data.price}
                          setStatus={setStatus}
                        />
                      </td>
                    </tr>
                  </tbody>
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
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Project</th>
                  <th>Price</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
