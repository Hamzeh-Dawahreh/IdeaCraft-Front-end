import React from "react";

import "../Assets/Styles/contactus.css";
export default function ContactUs() {
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
              <h5>ADDRESS</h5>
              IdeaCraft for consultant <br /> Amman,Jordan road
            </div>
            <div className="phone">
              <img src="./src/Assets/Images/phone.png" />
              <h5>PHONE</h5>
              <p>
                IdeaCraft for consultant <br /> +962 712345678
              </p>
            </div>
            <div className="email">
              <img src="./src/Assets/Images/email.png" />
              <h5>EMAIL</h5>
              <p>
                Request for Proposal <br /> hmzhdawahreh@gmai.com
              </p>
            </div>
          </div>
        </div>
        <div className="message-form">
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
            <div className="first-last">
              <label htmlFor="First Name" className="message-lable">
                First Name
                <input type="text" />
              </label>
              <label htmlFor="Last Name" className="message-lable">
                Last Name
                <input type="text" />
              </label>
            </div>
            <label htmlFor="Email" className="message-lable">
              Email
              <input type="text" />
            </label>
            <label htmlFor="Comments" className="message-lable">
              Comments
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
            <button className="submit-message">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
