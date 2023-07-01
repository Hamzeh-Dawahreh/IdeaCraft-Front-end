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
import RequiredAuth from "./customHooks/RequiredAuth";
import NotFound from "./Pages/NotFound404";
import jwtDecode from "jwt-decode";
import CompanyForm from "./Components/Profile/CompanyForm";
import axios from "axios";
export const AuthContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [companyname, setCompanyName] = useState();
  const [role, setRole] = useState();
  const [isUpdated, setIsUpdated] = useState(true);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // Decode the token to extract user information
  //     const decodedToken = jwtDecode(token);
  //     if (decodedToken) {
  //       setUsername(decodedToken.username);
  //       setCompanyName(decodedToken.companyname);
  //       setRole(decodedToken.role);
  //     }
  //   }
  // }, [!isLoggedIn]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Decode the token to extract user information
      const decodedToken = jwtDecode(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const fetchData = async () => {
        try {
          let response;
          if (decodedToken.role === "user") {
            response = await axios.get(
              `http://localhost:3500/users/getuser`,
              config
            );
            setUsername(response.data.username);
            setRole(decodedToken.role);
          } else if (decodedToken.role === "company") {
            response = await axios.get(
              `http://localhost:3500/users/getCompany`,
              config
            );
          }
          setCompanyName(response.data.companyname);
          setRole(decodedToken.role);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [isUpdated, !isLoggedIn]);
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      {" "}
      <AuthContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          username,
          setCompanyName,
          setUsername,
          companyname,
          role,
          isUpdated,
          setIsUpdated,
        }}
      >
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />

              <Route path="/signup" element={<Signup />} />

              <Route path="/realestate" element={<RealEstate />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/subscription" element={<Subscription />} />
              {/* <Route path="/payment" element={<Payment />} /> */}
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/checkout/:id" element={<Checkout />} />
              <Route element={<RequiredAuth />}>
                <Route path="/companyprofile" element={<CompanyProfile />} />{" "}
                <Route path="/companyform" element={<CompanyForm />} />
                <Route path="/userprofile" element={<UserProfile />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>{" "}
      </AuthContext.Provider>
    </>
  );
}
