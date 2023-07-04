import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function companyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    country: "",
    city: "",
    description: "",
  });
  const [images, setImages] = useState([]);
  const [companyData, setCompanyData] = useState("");
  const [service, setService] = useState([]);
  const [errors, setErrors] = useState("");
  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleBlur = (e) => {
    const validationErrors = {};
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!formData.phone.match(/^07\d{8}$/)) {
      validationErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.country) {
      validationErrors.country = "Country is required";
    } else if (!formData.country.match(/^[a-zA-Z]+$/)) {
      validationErrors.country = "Please enter a valid country name";
    }

    if (!formData.city) {
      validationErrors.city = "City is required";
    } else if (!formData.city.match(/^[a-zA-Z]+$/)) {
      validationErrors.city = "Please enter a valid city name";
    }
    if (!formData.description) {
      validationErrors.description = "description is required";
    } else {
      validationErrors.description = "";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
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
    try {
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("phone", formData.phone);
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
      console.log("Data sent successfully");
      navigate("/companyprofile");
      showSuccessAlert();
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
  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3500/users/getcompany`,
          config
        );
        setCompanyData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const getData = async () => {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `http://localhost:3500/form/getService/`,
        config
      );
      setService(response.data);
      if (
        response.data &&
        response.data.service &&
        response.data.service.phone &&
        response.data.service.country &&
        response.data.service.city &&
        response.data.service.description
      ) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          phone: response.data.service.phone,
          country: response.data.service.country,
          city: response.data.service.city,
          description: response.data.service.description,
        }));
      }
    };
    getData();

    fetchData();
  }, []);
  console.log(formData);
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
                required
                type="text"
                id="name"
                name="companyname"
                value={companyData && companyData.companyname}
                placeholder="Company Name"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
              />
            </div>
            <div class="flex items-center mb-5">
              <label
                for="number"
                class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
              >
                Phone Number
              </label>{" "}
              <input
                required
                defaultValue={service.service && service.service.phone}
                type="text"
                id="number"
                name="phone"
                placeholder="0712345678"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400 w-full
                      outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && (
                <div className=" flex justify-center">
                  <small className="text-red-500 ml-2">{errors.phone}</small>
                </div>
              )}
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
                required
                value={companyData && companyData.email}
                type="tel"
                id="number"
                name="email"
                placeholder="Email Address"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
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
                required
                defaultValue={service.service && service.service.country}
                type="text"
                id="number"
                name="country"
                placeholder="Country"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.country && (
                <div className=" flex justify-center">
                  <small className="text-red-500 ml-3">{errors.country}</small>
                </div>
              )}
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
                required
                defaultValue={service.service && service.service.city}
                type="text"
                id="number"
                name="city"
                placeholder="City"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              {errors.city && (
                <div className=" flex justify-center">
                  <small className="text-red-500 ml-3">{errors.city}</small>
                </div>
              )}
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
                required
                defaultValue={service.service && service.service.description}
                id="number"
                name="description"
                placeholder="Description"
                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none h-40 border-2  overflow-visible"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.description && (
                <div className=" flex justify-center">
                  <small className="text-red-500 ml-3">
                    {errors.description}
                  </small>
                </div>
              )}
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
                single
                onChange={handleImagesChange}
                style={{ padding: "10px 20px" }}
                required
              />
            </div>
            <div className="flex justify-center">
              <div class="text-right ">
                <button
                  type="submit"
                  class="py-3 px-8 bg-green-400 text-white font-bold"
                >
                  Add Service{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default companyForm;
