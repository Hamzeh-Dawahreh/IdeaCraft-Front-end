export default function validationUser(data) {
  const errors = {};
  const nameRegex = /^[A-Za-z]+(?:[A-Za-z]+)*$/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!data.firstname) {
    errors.firstname = "First Name is required";
  } else if (!nameRegex.test(data.firstname)) {
    errors.firstname = "Please Enter A Valid Name ";
  }
  if (!data.lastname) {
    errors.lastname = "Last Name is required";
  } else if (!nameRegex.test(data.lastname)) {
    errors.lastname = "Please Enter A Valid name";
  }
  if (!data.username) {
    errors.username = "Username is required";
  } else if (!nameRegex.test(data.username)) {
    errors.username = "Please Enter A Valid username";
  }
  if (!data.password) {
    errors.password = "Password Field is required";
    console.log("Password is required");
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
      "Password Field must  contain more than 8 characters, with at least 1 number, uppercase, and special characters ";
  }

  if (!data.email) {
    errors.email = " email Field is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = " email Field must contains the required format ";
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
}
