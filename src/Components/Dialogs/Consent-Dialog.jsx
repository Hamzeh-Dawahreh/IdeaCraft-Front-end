import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function ConsentDialog({
  companyRes,
  id,
  companyname,
  company_id,
  service_id,
  userConsent,
  setStatus,
  companyConsent,
  setService,
  setCompanyId,
}) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    setService(service_id);
    setCompanyId(company_id);
  }, []);
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
              "http://localhost:3500/books/userConsent",
              {
                userConsent: false,
                service_id: service_id,
                company_id: company_id,
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
                "You have declined the company's offer",
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
        View Response
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{companyname}</DialogHeader>
        <DialogBody divider>{companyRes} </DialogBody>
        <DialogFooter>
          {!error && userConsent == undefined && companyConsent && (
            <>
              {" "}
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
              <Link to={`/checkout/${id}`}>
                <Button variant="gradient" color="teal" onClick={handleOpen}>
                  <span>Confirm</span>
                </Button>
              </Link>
            </>
          )}
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
