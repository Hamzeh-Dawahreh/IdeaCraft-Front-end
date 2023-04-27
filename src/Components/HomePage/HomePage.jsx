import React from "react";
import Hero from "./Hero";
import Second from "./Second";
import Navbar from "../Navbar/Navbar";
import "./homepage.css";
export default function HomePage() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Hero />
      <Second />
    </div>
  );
}
