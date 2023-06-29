import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import RequestDialog from "../Components/Dialogs/Request-Dialog";
import Edit from "../Components/Dialogs/EditCompany-Dialog";
import "../Assets/Styles/profile.css";
import axios from "axios";
export default function CompanyProfile() {
  const [clients, setClients] = useState([]);
  const [status, setStatus] = useState(false);
  const [service, setService] = useState();
  const [userData, setUserData] = useState();
  const [isUpdated, setIsUpdated] = useState(false);

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
  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `http://localhost:3500/form/getService/`,
        config
      );
      setService(response.data);
    };
    getData();
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
            <Link
              to="/companyForm"
              className=" absolute top-0 left-0 bg-[#17a2b8] p-1  text-white text-sm"
            >
              {service && service.service == null ? (
                <button>Add Service</button>
              ) : (
                <button>Update Service</button>
              )}
            </Link>
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
            <Edit
              userData={userData}
              setIsUpdated={setIsUpdated}
              isUpdated={isUpdated}
            />
          </div>
        </div>
        {service && service.service !== null && (
          <div>
            <h1 className=" text-2xl text-center mb-3">You Service</h1> <hr />
            <div className="company-card">
              {service &&
                service.service?.Images.slice(0, 1).map((image, index) => (
                  <img
                    alt="image"
                    src={`http://localhost:3500/${image}`}
                    className=" max-h-80 rounded-xl object-fit shadow-lg"
                    key={index}
                  />
                ))}
              <div className="info">
                <h1 className=" text-2xl mb-3">
                  {service.service && service.service.companyname}
                </h1>

                <div>
                  <p className=" mb-2">
                    {service.service && service.service.description}
                  </p>
                  <i>
                    {" "}
                    <p className="mb-2 text-gray-500 text-sm">
                      Location : {service.service && service.service.country}/
                      {service.service && service.service.city}
                    </p>{" "}
                  </i>
                </div>
                <div className="flex text-gray-500  text-sm mb-2 ">
                  <div>Email:</div>
                  <div>{service.service && service.service.email}</div>
                  <div className=" ml-4">Phone:</div>
                  <div>{service.service && service.service.phone}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        <hr />
        <div className="clients">
          {" "}
          <h3 className="text-2xl text-center">CURRENT CLIENTS</h3>
          <div className="current-clients">
            <br />
            <table className=" sm:text-xs">
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
                        {data.price || "---"} JOD
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
                          ? "---"
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
                          companyConsent={data.companyConsent}
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
          <br />
          <br />
          <hr />
          {/* <h3 className="text-2xl text-center mt-10">PREVIOUS CLIENTS </h3> */}
          {/* <div className="previous-clients">
            <br />
            <br />
            <br />
            <br />
            <table className=" sm:text-xs">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
