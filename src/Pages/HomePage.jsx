import React from "react";
import Hero from "../Components/HomePage/Hero";
import Second from "../Components/HomePage/Second";
// import Navbar from "../Components/Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";
import "../Assets/Styles/homepage.css";
export default function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Second />
      {/* <Footer /> */}
    </div>
  );
}
