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
import { XMarkIcon } from "@heroicons/react/24/solid";
import jwtDecode from "jwt-decode";
import axios from "axios";
export default function BookingDialog({ service_id, company_id }) {
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);

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

      // Handle the response data
      console.log("Data sent successfully");
      // Perform any necessary actions with the response data
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error(error);
      // Perform any necessary error handling
    }
  };
  const handleOpen = () => setOpen(!open);
  return (
    <React.Fragment>
      <Button onClick={handleOpen} className="company-book">
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
