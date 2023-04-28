import React from "react";
import Hero from "./Hero";
import Second from "./Second";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./homepage.css";
export default function HomePage() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Second />
      <Footer />
    </div>
  );
}
