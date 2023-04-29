import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import "./payment.css";

export default function Payment() {
  return (
    <>
      <Navbar />
      <div className="payment-card">
        <div class="total-payment">
          <h5>Total</h5>
          <h6>$19.99</h6>
        </div>
        <hr />

        <div className="info-container">
          <div className="input-icon">
            <input type="text" placeholder="First Name" />
            <i className="bi bi-check-square">
              <img src="./src/Images/check.png" />
            </i>
          </div>
          <div className="input-icon">
            <input type="text" placeholder="Last Name" />
            <i className="bi bi-check-square">
              <img src="./src/Images/check.png" />
            </i>
          </div>
          <div className="input-icon">
            <input type="text" placeholder="Card Number" />
            <i className="bi bi-check-square">
              <img src="./src/Images/check.png" />
            </i>
          </div>
          <div className="input-icon">
            <input type="text" placeholder="CVV" />
            <i className="bi bi-check-square">
              <img src="./src/Images/check.png" />
            </i>
          </div>

          <img src="./src/Images/payment-methods.png" />

          <div className="input-icon">
            <input type="text" placeholder="MM/YY" />
            <i className="bi bi-check-square">
              <img src="./src/Images/check.png" />
            </i>
          </div>
        </div>
        <div className="payment-button-container">
          <button className="submit-payment">Submit payment</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
