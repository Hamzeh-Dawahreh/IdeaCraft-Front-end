import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import RealEstate from "./Pages/Real-estate";
import Technology from "./Pages/Technology";
import Manufacturing from "./Pages/Manufacturing";
import CompanyProfile from "./Pages/CompanyProfile";
import UserProfile from "./Pages/UserProfile";
import Subscription from "./Pages/Subscription";
import ContactUs from "./Pages/ContactUs";
import Aboutus from "./Pages/Aboutus";
import Checkout from "./Pages/Checkout";
export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* <Route path="*" element={<PageNotFound />} /> */}
            <Route path="/realestate" element={<RealEstate />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/companyprofile" element={<CompanyProfile />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/subscription" element={<Subscription />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
