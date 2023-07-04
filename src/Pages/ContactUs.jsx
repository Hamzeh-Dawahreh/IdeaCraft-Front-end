import React from "react";
import { useState, useEffect } from "react";

import emailjs from "emailjs-com";
import axios from "axios";
import "../Assets/Styles/contactus.css";
export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async (req, res) => {
      const response = await axios.get(
        "http://localhost:3500/dashboard/getContact"
      );
      setData(response.data[0]);
    };
    getData();
  }, []);
  const handleSubmit = (e) => {
    emailjs
      .sendForm(
        "service_kb1ss47",
        "template_r9aphvl",
        e.target,
        "R7Np1gdSLZeJ_BZ8h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact-us-body">
        <div className="get-in-touch">
          <h1>
            {" "}
            <b className="text-3xl">GET IN TOUCH</b>
          </h1>
          <div className="get-in-touch-info">
            <div className="location">
              <img src="./src/Assets/Images/location.png" />
              <h5>ADDRESS</h5>{" "}
              <p className=" text-center">
                IdeaCraft for consultant <br /> {data.location}
              </p>
            </div>
            <div className="phone">
              <img src="./src/Assets/Images/phone.png" />
              <h5>PHONE</h5>
              <p className=" text-center">
                IdeaCraft for consultant <br /> {data.phone}
              </p>
            </div>
            <div className="email">
              <img src="./src/Assets/Images/email.png" />
              <h5>EMAIL</h5>
              <p className=" text-center">
                Request for Proposal <br /> {data.email}
              </p>
            </div>
          </div>
        </div>
        <div className="message-form flex flex-wrap">
          <div className="message-us">
            <h1>
              {" "}
              <b className="text-3xl">Message Us</b>
            </h1>
            <br />
            <p>
              We would love to hear from you! Whether you have a question about
              our services, need help navigating our website, or want to share
              feedback, our team is here to assist you. Please fill out the form
              below and we'll get back to you as soon as possible. We value your
              privacy and will keep all information confidential. Thank you for
              choosing our website to connect with top feasibility study experts
              in your industry.
            </p>
          </div>
          <div className="leave-a-message">
            <form onSubmit={handleSubmit}>
              <div className="first-last">
                <label htmlFor="First Name" className="message-lable">
                  First Name
                  <input
                    type="text"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                </label>
                <label htmlFor="Last Name" className="message-lable">
                  Last Name
                  <input
                    type="text"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                  />
                </label>
              </div>
              <label htmlFor="Email" className="message-lable">
                Email
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="Comments" className="message-lable">
                Comments
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
              <button type="submit" className="submit-message">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
