import { createButton } from "react-social-login-buttons";
import { createSvgIcon } from "react-social-login-buttons";
const GoogleLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24"
    height="24"
  >
    <path
      fill="#FFC107"
      d="M45.85 22.058c0-1.47-.133-2.927-.383-4.358H24v8.256h11.974c-.486 2.48-2.049 4.579-4.299 5.932v4.932h6.924c4.05-3.752 6.372-9.265 6.372-14.762z"
    />
    <path
      fill="#FF3D00"
      d="M24 48c6.85 0 12.58-2.275 16.725-6.078l-6.925-4.932c-1.924 1.278-4.385 2.029-7.8 2.029-5.987 0-11.063-4.02-12.801-9.475H4.916v5.947C8.114 41.773 15.205 48 24 48z"
    />
    <path
      fill="#4CAF50"
      d="M11.199 28.901c-1.165-3.407-1.165-7.017 0-10.424V12.53H4.916C2.072 17.983 0 23.257 0 28.902s2.072 10.918 4.916 15.372h6.283v-5.947z"
    />
    <path
      fill="#1976D2"
      d="M24 9.6c3.005 0 5.755 1.029 7.922 2.738l5.91-5.91C36.58 3.067 30.849 0 24 0 15.205 0 8.114 6.227 4.916 12.53l6.283 4.849c1.738-5.455 6.814-9.475 12.801-9.475z"
    />
  </svg>
);

const config = {
  text: "Join with Google",
  icon: createSvgIcon(GoogleLogo),
  iconFormat: (name) => `fa fa-${name}`, // Correct the icon format
  style: {
    background: "white",
    color: "#000",
    borderRadius: "4px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "background 0.3s ease",
    width: "11.5rem",
  },
  activeStyle: { background: "grey" },
};

const myGoogleLoginButton = createButton(config);

export default myGoogleLoginButton;
