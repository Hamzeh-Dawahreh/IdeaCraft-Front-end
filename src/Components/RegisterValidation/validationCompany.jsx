export default function validationCompany(data) {
  const errors = {};
  const nameRegex = /^[A-Za-z]+(?:[A-Za-z]+)*$/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!data.companyname) {
    errors.companyname = "Company name is required";
  } else if (!nameRegex.test(data.companyname)) {
    errors.companyname = "Please Enter a Valid Company Name";
  }
  if (!data.password) {
    errors.password = "Password Field is required";
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
      "Password Field must contain more than 8 characters, with at least 1 number, uppercase, and special characters";
  }

  if (!data.email) {
    errors.email = " email Field is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = " email Field must contains the required format ";
  }
  if (!data.industry) {
    errors.industry = " Industry Field is required";
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}
