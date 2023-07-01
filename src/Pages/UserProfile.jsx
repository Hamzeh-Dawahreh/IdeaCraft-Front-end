import React, { useEffect, useState, useContext } from "react";
import { Rating } from "@mui/material";
import ConsentDialog from "../Components/Dialogs/Consent-Dialog";
import Edit from "../Components/Dialogs/EditUser-Dialog";
import axios from "axios";
import { AuthContext } from "../App";
import "../Assets/Styles/profile.css";

export default function UserProfile() {
  const [userData, setUserData] = useState();
  const [company, setCompany] = useState([]);
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState();
  const [service, setService] = useState();
  const [companyId, setCompanyId] = useState();
  const [rating, setRating] = useState(true);
  const { isUpdated, setIsUpdated } = useContext(AuthContext);

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
          `http://localhost:3500/users/getuser`,
          config
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [isUpdated]);
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
          "http://localhost:3500/books/getResponse",
          config
        );
        setCompany(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRequest();
  }, [status, rating]);
  const handleSubmit = async (e, company_id, service_id) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:3500/books/userRating",
        {
          rating: parseInt(value),
          service_id: service_id,
          company_id: company_id,
        },
        config
      );
      console.log("Data sent successfully");
      setRating(!rating);
    } catch (error) {
      console.error(error);
    }
  };
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
              <span>First Name</span>
              <span>Last Name</span>
              <span>Username</span>
              <span>Email Address</span>
            </div>
            <div className="user-info">
              <span>{userData && userData.firstname}</span>
              <span> {userData && userData.lastname}</span>
              <span>{userData && userData.username}</span>
              <span>{userData && userData.email}</span>
            </div>
            <div className="info-line">
              <p>YOUR INFORMATION</p>
            </div>
            <Edit />
          </div>
        </div>
        <hr />
        <div className="clients">
          {" "}
          <h3 className="text-2xl text-center">REQUESTED SERVICES</h3>
          <div className="current-clients">
            <br />
            <table className=" relative">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Industry</th>
                  <th>Company Approval</th>
                  <th>User Approval</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                {company.bookings?.map((data, index) => {
                  return (
                    <>
                      <tr className="text-gray-500" key={index}>
                        <td>{data.company_id.companyname}</td>
                        <td>{data.company_id.email}</td>
                        <td>{data.company_id.industry}</td>
                        <td>
                          {data.companyConsent === undefined
                            ? "Pending"
                            : data.companyConsent === true
                            ? "Approved"
                            : "Rejected"}
                        </td>
                        <td>
                          {data.userConsent === undefined
                            ? "---"
                            : data.userConsent === true
                            ? "Approved"
                            : "Rejected"}
                        </td>
                        <td className="text-green-500">
                          {data.price || "---"} JOD
                        </td>
                        <td>
                          {data.userConsent !== undefined &&
                          data.rating == 0 ? (
                            <form
                              onSubmit={(e) => {
                                handleSubmit(
                                  e,
                                  data.company_id._id,
                                  data.service_id._id
                                );
                              }}
                              className=" flex flex-col justify-center items-center"
                            >
                              <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                  setValue(newValue);
                                }}
                              />
                              <input type="submit" value="submit" />
                            </form>
                          ) : (
                            <Rating
                              name="read-only"
                              value={data.rating}
                              readOnly
                            />
                          )}
                        </td>
                        <td className=" flex flex-col text-red-600 text-xs ">
                          <ConsentDialog
                            companyRes={data.companyRes}
                            id={data._id}
                            companyname={data.company_id.companyname}
                            company_id={data.company_id._id}
                            service_id={data.service_id}
                            userConsent={data.userConsent}
                            companyConsent={data.companyConsent}
                            isDeleted={data.service_id.isDeleted}
                            setStatus={setStatus}
                            setService={setService}
                            setCompanyId={setCompanyId}
                          />{" "}
                          {data.service_id.isDeleted
                            ? "This Service is no longer available"
                            : ""}
                        </td>{" "}
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <br />
          <hr />
        </div>
      </div>
    </>
  );
}
