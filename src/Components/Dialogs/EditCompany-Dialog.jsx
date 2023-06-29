import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";
export default function Edit({ setIsUpdated, isUpdated }) {
  const [isFirstFormActive, setFirstFormActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [passData, setPassData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handlePassChange = (e) => {
    setPassData({ ...passData, [e.target.name]: e.target.value });
  };

  const handleToggleForm = () => {
    setFirstFormActive(!isFirstFormActive);
  };

  const [errors, setErrors] = useState({});
  const [passErorrs, setPassErrors] = useState({});
  const [formData, setFormData] = useState({
    companyname: "",
    industry: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Validation
    const errors = {};

    // Validate company name
    if (!formData.companyname) {
      errors.companyname = "Company name is required";
    }

    // Validate industry
    if (!formData.industry) {
      errors.industry = "Industry is required";
    }

    // Validate email
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      // Handle errors (e.g., update the state or show error messages)
      setErrors(errors);
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3500/users/updateCompany`,
        formData,
        config
      );
      setIsUpdated(!isUpdated);
      console.log("User details updated successfully");

      // You can add any additional logic here, such as updating the UI with the new data
    } catch (error) {
      console.error("Error updating user details:", error.response.data);
      Swal.fire(
        "Something went wrong",
        `${error.response.data.Emessage || error.response.data.Umessage}`,
        "error"
      );

      // Handle the error here, such as showing an error message to the user
    }
    setOpen(!open);
  };

  const handlePassword = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // Validate new password
    if (!isValidPassword(passData.newPassword)) {
      setPassErrors((prevErrors) => ({
        ...prevErrors,
        newPassword:
          "Password must contain at least one uppercase letter, one non-alphanumeric character, and be at least 8 characters long",
      }));
    } else {
      setPassErrors((prevErrors) => ({
        ...prevErrors,
        newPassword: "", // Clear the error if it was previously set
      }));
    }

    // Validate confirm password
    if (passData.newPassword !== passData.confirmPassword) {
      setPassErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
    } else {
      setPassErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "", // Clear the error if it was previously set
      }));
    }
    // Check if there are any errors
    if (Object.keys(passErorrs).length > 0) {
      setPassErrors(passErorrs);
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:3500/users/updatePassword`,
        passData,
        config
      );
      console.log("Password updated successfully");
      setOpen(!open);

      // You can add any additional logic here, such as updating the UI with the new data
    } catch (error) {
      console.error(error);
      // Handle the error here, such as showing an error message to the user

      setPassErrors((prevErrors) => ({
        ...prevErrors,
        oldPassword: error.response.data.message,
      }));
    }
  };
  const isValidEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

    return passwordRegex.test(password);
  };
  console.log(errors);
  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <div className="edit-image">
        <img onClick={handleOpen} src="./src/Assets/Images/Edit.png" />
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className=" text-base flex justify-around ">
          <button
            onClick={handleToggleForm}
            className=" border p-2 rounded bg-[#E44C65] text-white text-sm"
          >
            {isFirstFormActive ? "Change password" : "Change your information"}
          </button>
        </DialogHeader>
        {isFirstFormActive ? (
          <form
            className="max-w-md mx-auto p-4 bg-white rounded shadow"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2 text-sm"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyname"
                name="companyname"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              {errors.companyname && (
                <span className="text-red-500">{errors.companyname}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="industry"
                className="block text-gray-700 font-bold mb-2 text-sm"
              >
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              >
                <option value="">Select an industry</option>
                <option value="Technology">Technology</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Manufacturing">Manufacturing</option>
              </select>
              {errors.industry && (
                <span className="text-red-500">{errors.industry}</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2 text-sm"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
              <br />
            </div>
            <input
              type="submit"
              className=" border p-2 rounded-md bg-[#0fa3c2] text-white"
            />
          </form>
        ) : (
          <form
            className="max-w-md mx-auto p-4 bg-white rounded shadow"
            onSubmit={handlePassword}
          >
            <div className="mb-4">
              <label
                htmlFor="oldPassword"
                className="block text-gray-700 font-bold mb-2 text-sm"
              >
                Old Password
              </label>
              <input
                type="password"
                value={passData.oldPassword}
                id="oldPassword"
                name="oldPassword"
                onChange={handlePassChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              {passErorrs.oldPassword && (
                <small className="text-red-500">{passErorrs.oldPassword}</small>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 font-bold mb-2 text-sm"
              >
                New Password
              </label>
              <input
                type="password"
                value={passData.newPassword}
                id="newPassword"
                name="newPassword"
                onChange={handlePassChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              {passErorrs.newPassword && (
                <small className="text-red-500">{passErorrs.newPassword}</small>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2 text-sm"
              >
                Confirm Password
              </label>
              <input
                type="password"
                value={passData.confirmPassword}
                id="confirmPassword"
                name="confirmPassword"
                onChange={handlePassChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
              {passErorrs.confirmPassword && (
                <span className="text-red-500">
                  {passErorrs.confirmPassword}
                </span>
              )}
            </div>
            <input
              type="submit"
              className=" border p-2 rounded-md bg-[#0fa3c2] text-white"
            />
          </form>
        )}
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
