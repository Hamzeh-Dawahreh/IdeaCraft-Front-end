import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  // Exclude Login and Signup pages from rendering the Layout
  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/signup"
  ) {
    return <>{children}</>;
  } else {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
