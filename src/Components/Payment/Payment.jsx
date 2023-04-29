import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import "./payment.css";

export default function Payment() {
  return (
    <>
      <Navbar />
      <h1>Hello!</h1>
      <Footer />
    </>
  );
}
