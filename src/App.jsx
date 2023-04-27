import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
        {/* <Routes>
        <Route path="/" element={<Footer />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes> */}
      </Router>
      <Footer />
    </>
  );
}
