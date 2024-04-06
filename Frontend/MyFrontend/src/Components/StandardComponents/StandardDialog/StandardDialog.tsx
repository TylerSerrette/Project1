// react
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useState } from "react";

// third-party

// local

interface StandardDialogProps {
  openDialog: boolean;
  setOpenDialogTo: React.Dispatch<React.SetStateAction<boolean>>;
}

const StandardDialog: React.FC<StandardDialogProps> = (
  props: StandardDialogProps
) => {
  // Props
  const { openDialog, setOpenDialogTo } = props;

  // Constants

  // States

  // Functions
  const handleOpen = () => {
    setOpenDialogTo(true);
  };
  const handleClose = () => {
    setOpenDialogTo(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default StandardDialog;
