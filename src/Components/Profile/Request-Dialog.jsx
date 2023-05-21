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
        view status
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
          "Hello, I am reaching out to express my interest and inquire about the
          services your company provides. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. As I explore potential collaborations, I am
          particularly intrigued by the expertise and professionalism your
          company is known for. I am in need of assistance with a project and
          believe your team's proficiency can greatly contribute to its success.
          The project entails [briefly describe the project or its objectives].
          I am impressed by the comprehensive approach and attention to detail
          your company showcases in your portfolio. If possible, I would
          appreciate a detailed breakdown of your services, including timelines,
          pricing, and any additional information that would help me make an
          informed decision. I understand the importance of accurate feasibility
          studies and would like to ensure that all necessary aspects are
          covered. Please let me know the best way to proceed with the inquiry
          and provide any documents or materials required for a more precise
          evaluation. I am eager to discuss this opportunity further and look
          forward to your prompt response. Thank you for your time and
          consideration. Best regards,
          <br />
          <br />
          <textarea
            placeholder="Write Your response to the Client"
            className="w-full text-start"
          />
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
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span className="text-white	">Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
