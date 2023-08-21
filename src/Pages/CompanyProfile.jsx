import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RequestDialog from "../Components/Dialogs/Request-Dialog";
import Edit from "../Components/Dialogs/EditCompany-Dialog";
import "../Assets/Styles/profile.css";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../App";

export default function CompanyProfile() {
  const [clients, setClients] = useState([]);
  const [status, setStatus] = useState(false);
  const [service, setService] = useState("");
  const [userData, setUserData] = useState();
  const { isUpdated, setIsUpdated } = useContext(AuthContext);
  const [isDeleted, setIsDeleted] = useState(false);

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
  }, [isDeleted]);
  const handleDelete = async (service_id) => {
    const confirmed = await showConfirmationPrompt();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const isDeleted = true;

    if (confirmed) {
      try {
        const response = await axios.put(
          `http://localhost:3500/form/deleteService/${service_id}`,
          { isDeleted },
          config
        );
        Swal.fire("Done!", `${response.data}`, "success");
        setService();

        setIsDeleted(!isDeleted);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const showConfirmationPrompt = () => {
    return new Promise((resolve) => {
      Swal.fire({
        title: "Are you sure you want to  delete this service?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, soft delete it!",
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
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
            <Link
              to="/companyForm"
              className=" absolute top-0 left-0 bg-[#17a2b8] p-1  text-white text-sm"
            >
              {(service && service.service !== null) || "" ? (
                <button>Update Service</button>
              ) : (
                <button>Add Service</button>
              )}
              {/* {(service && service.service == null) || "" ? (
                <button>Add Service</button>
              ) : (
                <button>Update Service</button>
              )} */}
              {/* ??????????????????? */}
            </Link>
            <div className="user-titles">
              <span>Company Name</span>
              <span>Category/Industry</span>
              <span>Email Address</span>
            </div>
            <div className="user-info">
              <span>{userData && userData.companyname}</span>
              <span>{userData && userData.industry}</span>
              <span>{userData && userData.email}</span>
            </div>
            <div className="info-line">
              <p>Your information</p>
            </div>
            <Edit userData={userData} />
          </div>
        </div>
        {service && service.service !== null && (
          <div>
            <h1 className=" text-2xl text-center mb-3">Your Service</h1> <hr />
            <br />
            <div className=" text-center font-bold underline">
              {" "}
              {service.service && service.service.isApproved
                ? "Congratualtions ! Your application has been approved"
                : service.service.isApproved == false
                ? "We are sorry. Your application has been denied, please contact us for more info"
                : "Thank you for your patience as we review your application"}
            </div>
            <div className="company-card flex-wrap">
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
                  {service.service && service.service.company_id.companyname}
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
                <div className="flex text-gray-500  text-sm mb-2  justify-between">
                  <div>
                    Email:{service.service && service.service.company_id.email}
                  </div>
                  <div className=" ml-4">
                    Phone:{service.service && service.service.phone}
                  </div>
                  <button
                    className=" bg-red-400 p-2 rounded-sm text-white"
                    onClick={() => {
                      handleDelete(service.service._id);
                    }}
                  >
                    Delete Service
                  </button>
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
            <table className=" text-xs sm:text-[15px]">
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
        </div>
      </div>
    </>
  );
}
