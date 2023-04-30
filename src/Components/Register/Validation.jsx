export default function Validation() {
  if (validateUsername && validatePassword && validateEmail && validatePhone) {
    return;
  } else {
  }
}

// Validate username without spaces
function validateUsername(username) {
  return !/\s/.test(username);
}

// Validate password more than 8 characters, with at least 1 number, uppercase, and special characters
function validatePassword(password) {
  const hasNumber = /[0-9]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  return password.length >= 8 && hasNumber && hasUpperCase && hasSpecial;
}

// Validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// Validate phone number 10 digits starts with 07
function validatePhone(phone) {
  const phoneRegex = /^07\d{8}$/;
  return phoneRegex.test(phone);
}
