// react
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Box,
  DialogContentProps,
  DialogProps,
} from "@mui/material";
import React, { useState } from "react";

// third-party

// local

interface StandardDialogProps {
  openDialog: boolean;
  setOpenDialogTo: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content?: React.ReactNode;
  contentText?: string;
  actions?: React.ReactNode;
  primaryButton?: {
    text: string;
    type?: "submit" | "button";
    onClick?: () => void;
  };
  deleteButton?: {
    text: string;
    onClick: () => void;
  };
  cancelButton?: {
    text: string;
    onClick: () => void;
  };
  formButtons?: [
    {
      text: string;
      type?: "submit" | "button";
      onClick?: () => void;
    }
  ];
  dialogProps?: DialogProps;
}

const StandardDialog: React.FC<StandardDialogProps> = (
  props: StandardDialogProps
) => {
  // Props
  const {
    openDialog,
    setOpenDialogTo,
    title,
    content,
    contentText,
    actions,
    primaryButton,
    deleteButton,
    cancelButton,
    dialogProps,
  } = props;

  // Constants

  // States

  // Functions
  const handleOpen = () => {
    setOpenDialogTo(true);
  };

  const handleClose = () => {
    if (cancelButton) {
      cancelButton.onClick();
    }
    setOpenDialogTo(false);
  };

  return (
    <React.Fragment>
      <Dialog open={openDialog}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent {...dialogProps}>
          <DialogContentText>{contentText}</DialogContentText>
          {content}
        </DialogContent>
        <DialogActions>
          {deleteButton && (
            <Button onClick={deleteButton.onClick}>{deleteButton.text}</Button>
          )}
          <Box flexGrow={1} />
          {actions}
          {cancelButton && (
            <Button onClick={handleClose}>{cancelButton.text}</Button>
          )}
          {primaryButton && (
            <Button type={primaryButton.type} onClick={primaryButton.onClick}>
              {primaryButton.text}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default StandardDialog;
