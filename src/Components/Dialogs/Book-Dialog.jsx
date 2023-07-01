import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";
export default function BookingDialog({ service_id, company_id, role }) {
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let username = "";
  let user_id = "";
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      username = decodedToken.username;
      user_id = decodedToken.user_id;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }
  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:3500/books/userReq",
        { ...message, service_id: service_id, company_id: company_id },
        config
      );

      console.log("Data sent successfully");
      Swal.fire(
        "Done!",
        `You can see the company's response in your profile page`,
        "success"
      );
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire(
        "Something went wrong",
        `${error.response.data.message}`,
        "error"
      );
    }
  };
  const handleOpen = () => {
    token ? setOpen(!open) : navigate("/login");
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        className="company-book"
        disabled={role == "company"}
      >
        Book
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>Clarify your requirements</DialogHeader>
          <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input label="Username" value={username} />
            <Textarea
              label="Message"
              name="userReq"
              onChange={(e) => {
                setMessage({ [e.target.name]: e.target.value });
              }}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleOpen();
              handleClick();
            }}
          >
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}
