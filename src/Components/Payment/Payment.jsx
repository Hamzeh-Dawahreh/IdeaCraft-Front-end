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
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="CVV" />
          <img src="./src/Images/payment-methods.png" />

          <input type="text" placeholder="MM/YY" />
        </div>
        <div>
          <button>Submit Paymen</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
