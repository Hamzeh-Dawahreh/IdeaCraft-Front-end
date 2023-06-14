import { Fragment, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";

export default function Edit({ userData }) {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    companyname: "",
    industry: "",
    details: "",
    email: "",
  });
  useEffect(() => {
    setFormData({
      companyname: userData && userData.companyname,
      industry: userData && userData.industry,
      details: userData && userData.details,
      email: userData && userData.email,
    });
  }, [userData]);

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

    // Validate details
    if (!formData.details) {
      errors.details = "Details is required";
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
        `http://localhost:3500/users/updateuser`,
        formData,
        config
      );
      console.log("User details updated successfully");
      // You can add any additional logic here, such as updating the UI with the new data
    } catch (error) {
      console.error("Error updating user details:", error.response.data);
      // Handle the error here, such as showing an error message to the user
    }
    setOpen(!open);
  };
  const isValidEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [open, setOpen] = useState(false);

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
        <DialogHeader className="">Change your information</DialogHeader>
        <form
          className="max-w-md mx-auto p-4 bg-white rounded shadow"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyname"
              value={formData.companyname}
              name="companyname"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
            {errors.companyname && (
              <span className="text-red-500">{errors.companyname}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="industry"
              className="block text-gray-700 font-bold mb-2"
            >
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
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
              htmlFor="details"
              className="block text-gray-700 font-bold mb-2"
            >
              Details
            </label>
            <textarea
              id="details"
              value={formData.details}
              name="details"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
            {errors.details && (
              <span className="text-red-500">{errors.details}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
        </form>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            variant="gradient"
            color="green"
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
