import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient" color="cyan">
        View Status
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Abc Company.</DialogHeader>
        <DialogBody divider>
          We have read your application and we can start here is our contacts
          and the estimated price :
          <br />
          abcd@gmal.com
          <br />
          +96212345789
          <br /> $123
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="text-rose-700">Reject</span>
          </Button>
          <Button variant="gradient" color="teal" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
