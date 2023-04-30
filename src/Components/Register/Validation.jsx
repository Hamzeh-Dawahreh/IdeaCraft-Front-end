export default function Validation(data) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!data.password) {
    errors.password = "Password Field is required";
    console.log("Password is required");
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
      "Password Field must  contain more than 8 characters, with at least 1 number, uppercase, and special characters ";
  }

  if (!data.email) {
    errors.email = "Country email Field is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Country email Field must contains only 2 Capital letters ";
  }
  return errors;
}
