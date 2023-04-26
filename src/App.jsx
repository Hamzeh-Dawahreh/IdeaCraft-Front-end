// import { useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Second from "./Components/Second";
export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Second />
    </div>
  );
}
