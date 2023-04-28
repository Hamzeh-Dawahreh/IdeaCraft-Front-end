import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Register/Login";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
