/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

function BenifactorForm() {
  const [formData, setFormData] = useState({
    companyname: "",
    industry: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    description: "",
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImagesChange = (event) => {
    setImages([...event.target.files]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(formData);
    try {
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("companyId", formData.companyId);
      formDataWithFiles.append("companyname", formData.companyname);
      formDataWithFiles.append("phone", formData.phone);
      formDataWithFiles.append("email", formData.email);
      formDataWithFiles.append("industry", formData.industry);
      formDataWithFiles.append("country", formData.country);
      formDataWithFiles.append("city", formData.city);
      formDataWithFiles.append("description", formData.description);

      images.forEach((file) => {
        formDataWithFiles.append("images", file);
      });

      const response = await axios.post(
        "http://localhost:3500/form/submitApplication",
        formDataWithFiles,
        config
      );
      console.log(formDataWithFiles);
      console.log("Data sent successfully");
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  const showSuccessAlert = () => {
    Swal.fire({
      title:
        "Your request has been completed successfully, we will display your request as soon as possible",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className=" mt-40">
      <h1 className="text-center pb-8 font-bold text-cyan-400 text-3xl ">
        Services Application
      </h1>

      <div class="   py-20  px-10 min-h-screen ">
        <div class="bg-white shadow-lg border-2 p-10 md:w-3/4 lg:w-1/2 mx-auto">
          <form action="" onSubmit={handleSubmit}>
            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder=" Please fill the company's info "
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
              text-gray-600 placeholder-gray-600
              "
                disabled
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="name"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600 text-sm"
              >
                Company Name
              </label>
              <input
                type="text"
                id="name"
                name="companyname"
                placeholder="Company Name"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center  mb-5">
              <label
                for="name"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600 text-sm"
              >
                Industry
              </label>
              <select
                className="signup-input"
                name="industry"
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Real Estates">Real Estates</option>
                <option value="Technology">Technology</option>
                <option value="Manufacturing">Manufacturing</option>
              </select>{" "}
            </div>

            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="phone"
                placeholder="Phone Number"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                Email Address
              </label>
              <input
                type="tel"
                id="number"
                name="email"
                placeholder="Email Address"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>

            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Please insert the company's location "
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
                      text-gray-600 placeholder-gray-600
                      "
                disabled
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                font-bold text-gray-600"
              >
                Country
              </label>
              <input
                type="text"
                id="number"
                name="country"
                placeholder="Country"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                City{" "}
              </label>
              <input
                type="text"
                id="number"
                name="city"
                placeholder="City"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
              />
            </div>

            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Company's Details "
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
              text-gray-600 placeholder-gray-600
              "
                disabled
              />
            </div>

            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                Description{" "}
              </label>
              <textarea
                id="number"
                name="description"
                placeholder="Description"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none h-40 border-2  overflow-visible"
                onChange={handleChange}
              />
            </div>
            <div class="flex items-center mb-5">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Company Pictures"
                class="flex-1 py-2 border-b-2 border-white border-b-black focus:border-green-400 
              text-gray-600 placeholder-gray-600
              "
                disabled
              />
            </div>

            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                {" "}
                Company Pictures{" "}
              </label>
              <input
                type="file"
                id="file"
                placeholder="file"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                multiple
                onChange={handleImagesChange}
                style={{ padding: "10px 20px" }}
              />
            </div>

            <div className="flex justify-center">
              {" "}
              <div class="text-right ">
                <button
                  type="submit"
                  class="py-3 px-8 bg-green-400 text-white font-bold"
                  onClick={showSuccessAlert}
                >
                  Confirm{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BenifactorForm;
