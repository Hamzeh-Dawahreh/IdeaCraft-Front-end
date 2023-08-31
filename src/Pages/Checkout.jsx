import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Checkout = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNo: "",
    creditExpiry: "",
    creditCvc: "",
    billingAddress: "",
    billingState: "",
    billingZip: "",
  });

  const [errors, setErrors] = useState({});
  const handleBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value.trim();
  
    let validationErrors = { ...errors };
  
    // Validate field based on its name
    switch (fieldName) {
      case "card-holder":
        if (fieldValue === "") {
          validationErrors.cardHolder = "Card Holder name is required";
        } else if (!/^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)*$/.test(fieldValue)) {
          validationErrors.cardHolder = "Invalid Card Holder name format";
        } else {
          validationErrors.cardHolder = ""; // Clear the error
        }
        break;
      case "cardNo":
        if (fieldValue === "") {
          validationErrors.cardNo = "Card Number is required";
        } else if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(fieldValue)) {
          validationErrors.cardNo = "Invalid Card Number format";
        } else {
          validationErrors.cardNo = ""; // Clear the error
        }
        break;
      case "creditExpiry":
        if (fieldValue === "") {
          validationErrors.creditExpiry = "Credit Expiry is required";
        } else if (!/^\d{2}\/\d{2}$/.test(fieldValue)) {
          validationErrors.creditExpiry = "Invalid Credit Expiry format";
        } else {
          validationErrors.creditExpiry = ""; // Clear the error
        }
        break;
      case "creditCvc":
        if (fieldValue === "") {
          validationErrors.creditCvc = "CVC is required";
        } else if (!/^\d{3}$/.test(fieldValue)) {
          validationErrors.creditCvc = "Invalid CVC format";
        } else {
          validationErrors.creditCvc = ""; // Clear the error
        }
        break;
      case "billingAddress":
        if (fieldValue === "") {
          validationErrors.billingAddress = "Billing Address is required";
        } else {
          validationErrors.billingAddress = ""; // Clear the error
        }
        break;
      case "billingState":
        if (fieldValue === "") {
          validationErrors.billingState = "Province is required";
        } else {
          validationErrors.billingState = ""; // Clear the error
        }
        break;
      case "billingZip":
        if (fieldValue === "") {
          validationErrors.billingZip = "ZIP is required";
        } else if (!/^\d{5}$/.test(fieldValue)) {
          validationErrors.billingZip = "Invalid ZIP format";
        } else {
          validationErrors.billingZip = ""; // Clear the error
        }
        break;
      default:
        break;
    }
  
    setErrors(validationErrors);
  };
  console.log(errors);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error !== "")) {

      Swal.fire(
        " Error",
        "Please fill the form data.",
        "error"
      );
      return;
    }
  
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:3500/books/userConsent",
        {
          userConsent: true,
          service_id: data.bookings.service_id,
          company_id: data.bookings.company_id._id,
        },
        config
      );
      console.log("Data sent successfully");
    } catch (error) {
      console.error(error);
    }

    Swal.fire("Thank you!", "Your payment has been completed!", "success");

    navigate("/");
  };
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `http://localhost:3500/books/getBooking/${id}`,
        config
      );
      setData(response.data);
    };

    getData();
  }, []);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8 bg-gray-100 rounded-lg shadow-md">
            <p className="text-xl font-medium">Service Details</p>
            <br />
            <br />
            <div className="space-y-4">
              <p className="text-gray-400">Company Name:</p>
              <p className="font-medium">
                {data.bookings && data.bookings.company_id.companyname}
              </p>
              <p className="text-gray-400">Industry:</p>
              <p className="font-medium">
                {data.bookings && data.bookings.company_id.industry}
              </p>
              <p className="text-gray-400">Details:</p>
              <p className="font-normal">
                {data.bookings && data.bookings.companyRes}{" "}
              </p>
              <p className="text-gray-400">Price:</p>
              <p className="font-medium">
                {data.bookings && data.bookings.price} JOD
              </p>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <form                onSubmit={handleSubmit}
>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>
              <div className="relative">
                <input 
                required
                  onChange={(e) =>
                    setFormData({ ...formData, cardHolder: e.target.value })
                  }
                  onBlur={handleBlur}
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                {errors.cardHolder && (
                  <small className=" text-red-600 text-xs">
                    {errors.cardHolder}
                  </small>
                )}
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, cardNo: e.target.value })
                    }
                    required
                    onBlur={handleBlur}
                    type="text"
                    id="card-no"
                    name="cardNo"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  {errors.cardNo && (
                    <small className=" text-red-600">{errors.cardNo}</small>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center  px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <div className=" flex flex-col">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, creditExpiry: e.target.value })
                    }
                    required
                    onBlur={handleBlur}
                    type="text"
                    name="creditExpiry"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="MM/YY"
                  />{" "}
                  {errors.creditExpiry && (
                    <small className=" text-red-600">
                      {errors.creditExpiry}
                    </small>
                  )}
                </div>{" "}
                <div className=" flex flex-col">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, creditCvc: e.target.value })
                    }
                    required
                    onBlur={handleBlur}
                    type="text"
                    name="creditCvc"
                    className="w-full flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="CVC"
                  />
                  {errors.creditCvc && (
                    <small className=" text-red-600">{errors.creditCvc}</small>
                  )}
                </div>
              </div>
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        billingAddress: e.target.value,
                      })
                    }
                    required
                    onBlur={handleBlur}
                    type="text"
                    id="billing-address"
                    name="billingAddress"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street Address"
                  />{" "}
                  {errors.billingAddress && (
                    <small className=" text-red-600 text-xs">
                      {errors.billingAddress}
                    </small>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg"
                      alt=""
                    />
                  </div>
                </div>{" "}
                <div className=" flex flex-col">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, billingState: e.target.value })
                    }
                    required
                    onBlur={handleBlur}
                    placeholder="Province"
                    type="text"
                    name="billingState"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.billingState && (
                    <small className=" text-red-600">
                      {errors.billingState}
                    </small>
                  )}
                </div>
                <div className=" flex flex-col">
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, billingZip: e.target.value })
                    }
                    required
                    onBlur={handleBlur}
                    type="text"
                    name="billingZip"
                    className="  w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none  focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="ZIP"
                  />{" "}
                  {errors.billingZip && (
                    <small className=" text-red-600">{errors.billingZip}</small>
                  )}{" "}
                </div>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Fees</p>
                  <p className="font-semibold text-gray-900">0.08%</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {data.bookings &&
                    Math.round(
                      parseInt(data.bookings.price) * 0.08 + data.bookings.price
                    )}
                  JOD
                </p>
              </div>
            <button
            type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Submit Payment
            </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Checkout;
