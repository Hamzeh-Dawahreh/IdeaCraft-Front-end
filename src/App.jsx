import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Register/Login";
import Signup from "./Components/Register/Signup";
import RealEstate from "./Components/Solutions/Real-estate";
import Technology from "./Components/Solutions/Technology";
import Manufacturing from "./Components/Solutions/Manufacturing";
import CompanyProfile from "./Components/Profile/CompanyProfile";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/profile" element={<CompanyProfile />} />
        </Routes>
      </Router>
    </>
  );
}
