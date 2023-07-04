import "../Assets/Styles/solution.css";
import { Rating } from "@mui/material";
import Dialog from "../Components/Dialogs/Book-Dialog";
import Pagination from "@mui/material/Pagination";
import { AuthContext } from "../App";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function RealEstate() {
  const [companyData, setCompanyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { role } = useContext(AuthContext);
  const [filteredCompanies, setFilteredCompanies] = useState(companyData);

  const companiesPerPage = 3;
  const { id } = useParams();

  // Pagination
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies?.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  //Search
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredData = companyData.filter((data) =>
      data.company_id.companyname.toLowerCase().includes(searchValue)
    );
    setFilteredCompanies(filteredData);
    setSearch(searchValue);
  };
  // Change page
  const handlePageChange = (value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3500/form/getSolution/${id}`
        );
        setCompanyData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    setFilteredCompanies(companyData);
  }, [companyData]);

  console.log(filteredCompanies);
  return (
    <>
      <br />
      <br />
      <div className="solution-container">
        <br />
        <br />
        <br />
        {id === "Real Estates" ? (
          <div className="hero-solution flex flex-wrap">
            <div className="intro">
              <h6>For Real estates</h6>
              <br />
              <h4>
                Feasibility studies for real estate projects involve analyzing
                the potential profitability of a property development. This
                includes assessing factors such as location, market demand,
                construction costs, and projected revenue.
              </h4>
              <br />
              <button className="book-now first animate__animated animate__pulse animate__infinite">
                <a href="#booking">Book now</a>
              </button>
              <br />
              <br />
            </div>
            <img src="../src/Assets/Images/real-estatePage.png" />
          </div>
        ) : id === "Manufacturing" ? (
          <div className="hero-solution">
            <div className="intro">
              <h6>For Manufacturing</h6>
              <br />
              <h4>
                Feasibility studies for manufacturing projects involve analyzing
                the feasibility of producing a new product or expanding
                production capacity. This includes assessing factors such as
                production costs, market demand, supply chain logistics, and
                potential profitability.
              </h4>
              <br />
              <button className="book-now first animate__animated animate__pulse animate__infinite">
                <a href="#booking">Book now</a>
              </button>
            </div>
            <img src="../src/Assets/Images/bg3.png" width="693" height="414" />
          </div>
        ) : (
          <div className="hero-solution">
            <div className="intro">
              <h6>For Technology</h6>
              <br />
              <h4>
                Feasibility studies for technology projects involve analyzing
                the potential profitability and market demand of a proposed
                technology product or service. This includes assessing factors
                such as development costs, intellectual property protection,
                potential markets, and projected revenue.
              </h4>
              <br />
              <button className="book-now first animate__animated animate__pulse animate__infinite">
                <a href="#booking">Book now</a>
              </button>
            </div>
            <img src="../src/Assets/Images/Technology-cover.png" />
          </div>
        )}
        <br />
        <br />
        <div className="our-companies">
          <br /> <div className="line-2"></div>
          <br />
          <br />
          <div className=" flex justify-around">
            <h1 id="booking" className="text-3xl	">
              Our Companies
            </h1>
            <div className=" flex">
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1c1d26]  block w-20vw pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#1c1d26] dark:focus:border-[#1c1d26]"
                  placeholder="Search by company name"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-1 text-sm font-medium text-white bg-[#1c1d26] rounded-lg border border-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#1c1d26] dark:hover:bg-[grey] dark:focus:ring-[white]"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
          {currentCompanies?.map((data, index) => {
            return (
              <div className="company-card flex flex-wrap" key={index}>
                {data.Images?.slice(0, 1).map((image, index) => (
                  <img
                    alt="image"
                    src={`http://localhost:3500/${image}`}
                    className=" max-h-80 rounded-xl object-fit shadow-lg"
                    key={index}
                  />
                ))}
                <br />
                <br />
                <div className="info">
                  <h1 className=" text-2xl mb-3">
                    {data.company_id.companyname}
                  </h1>

                  <div>
                    <p className=" mb-2">{data.description}</p>
                    <i>
                      {" "}
                      <p className="mb-2 text-gray-500 text-sm">
                        Location : {data.country}/{data.city}
                      </p>{" "}
                    </i>
                  </div>
                  <div className="flex text-gray-500  text-sm mb-2 ">
                    <div>Email:</div>
                    <div>{data.company_id.email}</div>
                    <div className=" ml-4">Phone:</div>
                    <div>{data.phone}</div>
                  </div>

                  <div className="company-rating mt-2">
                    <div className=" flex">
                      <Rating
                        name="half-rating-read"
                        value={data.company_id.rating}
                        precision={0.5}
                        readOnly
                      />
                      <div className=" text-gray-500">
                        ({data.company_id.rating})
                      </div>
                    </div>
                    <Dialog
                      service_id={data._id}
                      company_id={data.company_id}
                      role={role}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className=" flex justify-center">
        <Pagination
          className=" mt-20"
          count={Math.ceil(filteredCompanies?.length / companiesPerPage)}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
