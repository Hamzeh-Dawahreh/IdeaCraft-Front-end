import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Register/Login";
import Signup from "./Components/Register/Signup-user";
import Footer from "./Components/Footer/Footer";

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
        </Routes>
      </Router>
    </>
  );
}
