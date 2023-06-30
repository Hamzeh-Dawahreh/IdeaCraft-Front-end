import { Fragment, useState, useEffect } from "react";
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
  const [errors, setErrors] = useState({});
  const [passErrors, setPassErrors] = useState({});
  const [formData, setFormData] = useState({
    companyname: "",
    industry: "",
    email: "",
  });
  const nameRegex = /^[A-Za-z]+(?:[A-Za-z]+)*$/;

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    // Perform validation based on the input field name
    switch (name) {
      case "companyname":
        if (!value) {
          newErrors.companyname = "Company Name is required";
        } else if (!nameRegex.test(value)) {
          newErrors.companyname =
            "Company Name shouldn't start with a number, and shouldn't contain special characters or spaces.";
        } else {
          delete newErrors.companyname; // Clear the error if it was previously set
        }
        break;
      case "industry":
        if (!value) {
          newErrors.industry = "Industry is required";
        } else {
          delete newErrors.industry; // Clear the error if it was previously set
        }
        break;
      case "email":
        if (!value) {
          newErrors.email = "Email is required";
        } else if (!isValidEmail(value)) {
          newErrors.email = "Invalid email format";
        } else {
          delete newErrors.email; // Clear the error if it was previously set
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handlePassBlur = (e) => {
    const { name, value } = e.target;
    let newPassErrors = { ...passErrors };

    // Perform validation based on the input field name
    switch (name) {
      case "oldPassword":
        if (!value) {
          newPassErrors.oldPassword = "Old Password is required";
        } else {
          delete newPassErrors.oldPassword; // Clear the error if it was previously set
        }
        break;
      case "newPassword":
        if (!value) {
          newPassErrors.newPassword = "New Password is required";
        } else if (!isValidPassword(value)) {
          newPassErrors.newPassword =
            "Password must contain at least one uppercase letter, one non-alphanumeric character, and be at least 8 characters long";
        } else {
          delete newPassErrors.newPassword; // Clear the error if it was previously set
        }
        break;
      case "confirmPassword":
        if (!value) {
          newPassErrors.confirmPassword = "Confirm Password is required";
        } else if (value !== passData.newPassword) {
          newPassErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newPassErrors.confirmPassword; // Clear the error if it was previously set
        }
        break;
      default:
        break;
    }

    setPassErrors(newPassErrors);
  };

  const handlePassChange = (e) => {
    setPassData({ ...passData, [e.target.name]: e.target.value });
  };

  const handleToggleForm = () => {
    setFirstFormActive(!isFirstFormActive);
    setPassData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setPassErrors({});
    setFormData({
      companyname: "",
      industry: "",
      email: "",
    });
    setErrors({});
  };

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
    // Check if there are any errors
    if (Object.keys(passErrors).length > 0) {
      setPassErrors(passErrors);
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:3500/users/updatePassword`,
        passData,
        config
      );
      console.log("Password updated successfully");
      Swal.fire("Done!", "Your password has been changed.", "success");

      // You can add any additional logic here, such as updating the UI with the new data
    } catch (error) {
      console.error(error);
      // Handle the error here, such as showing an error message to the user

      Swal.fire(
        "Something went wrong",
        `${error.response.data.message}`,
        "error"
      );
    }
    setOpen(!open);
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
        <DialogBody>
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
                  required
                  type="text"
                  id="companyname"
                  name="companyname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.companyname}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
                {errors.companyname && (
                  <small className="text-red-500">{errors.companyname}</small>
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
                  required
                  id="industry"
                  name="industry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.industry}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select an industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Real Estates">Real Estate</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
                {errors.industry && (
                  <small className="text-red-500">{errors.industry}</small>
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
                  required
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
                {errors.email && (
                  <small className="text-red-500">{errors.email}</small>
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
                  required
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  onChange={handlePassChange}
                  onBlur={handlePassBlur}
                  value={passData.oldPassword}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
                {passErrors.oldPassword && (
                  <small className="text-red-500">
                    {passErrors.oldPassword}
                  </small>
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
                  required
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  onChange={handlePassChange}
                  onBlur={handlePassBlur}
                  value={passData.newPassword}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
                {passErrors.newPassword && (
                  <small className="text-red-500">
                    {passErrors.newPassword}
                  </small>
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
                  required
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handlePassChange}
                  onBlur={handlePassBlur}
                  value={passData.confirmPassword}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
                {passErrors.confirmPassword && (
                  <span className="text-red-500">
                    {passErrors.confirmPassword}
                  </span>
                )}
              </div>
              <input
                type="submit"
                className=" border p-2 rounded-md bg-[#0fa3c2] text-white"
              />
            </form>
          )}
        </DialogBody>
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
