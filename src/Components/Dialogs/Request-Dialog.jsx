import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

import axios from "axios";
export default function RequestDialog({
  userReq,
  user_id,
  service_id,
  companyRes,
  price,
  companyConsent,
  setStatus,
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:3500/books/companyRes",
        {
          ...message,
          companyConsent: true,
          user_id: user_id,
          service_id: service_id,
          userReq: userReq,
        },
        config
      );

      console.log("Data sent successfully");
      setStatus(!false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleOpen = () => setOpen(!open);

  const handleReject = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, decline it!",
    })
      .then(async (result) => {
        // Convert the .then() callback into an async function
        if (result.isConfirmed) {
          try {
            const token = localStorage.getItem("token");
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };

            const response = await axios.post(
              "http://localhost:3500/books/companyConsent",
              {
                companyConsent: false,
                service_id: service_id,
                user_id: user_id,
              },
              config
            );

            setError(response.data.Errormessage);
            if (response.data.Errormessage) {
              Swal.fire(
                "Something went wrong",
                `${response.data.Errormessage}`,
                "error"
              );
            } else {
              Swal.fire(
                "declined!",
                "You have declined the client proposal",
                "success"
              );
            }
            console.log("Data sent successfully");
            setStatus(!false);
          } catch (error) {
            console.error(error);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient" color="cyan">
        view request
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Hamzeh Dawahreh</DialogHeader>
        <DialogBody divider>
          {userReq} <br />
          <br />
          <label htmlFor="">Your Response:</label>
          <textarea
            value={companyRes}
            placeholder="Write Your response to the Client"
            className="w-full text-start"
            name="companyRes"
            onChange={(e) => {
              setMessage({ ...message, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="">Price:</label>
          <input
            value={price}
            type="number"
            name="price"
            placeholder="Enter the price in JOD"
            onChange={(e) => {
              setMessage({ ...message, [e.target.name]: e.target.value });
            }}
          />
        </DialogBody>
        <DialogFooter>
          {companyRes && price && companyConsent && (
            <>
              <Button
                variant="text"
                color="red"
                onClick={() => {
                  handleOpen();
                  handleReject();
                }}
                className="mr-1"
              >
                <span className="text-rose-700">Reject</span>
              </Button>
              <Button
                variant="gradient"
                color="teal"
                onClick={() => {
                  handleOpen();
                  handleClick();
                }}
              >
                <span className="text-white	">Approve</span>
              </Button>
            </>
          )}
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
