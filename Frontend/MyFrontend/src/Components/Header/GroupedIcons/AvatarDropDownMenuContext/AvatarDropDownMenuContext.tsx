// react
import React, { createContext, useContext, useEffect } from "react";

// third-party

// local

export type AvatarDropDownMenuContextProps = {
  openSignUpDialog: boolean;
  openLoginDialog: boolean;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleOpenSignUpDialog: () => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseSignUpDialog: () => void;
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  setOpenSignUpDialogTo: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenLoginDialogTo: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AvatarDropDownMenuContext =
  createContext<AvatarDropDownMenuContextProps>({
    openSignUpDialog: false,
    openLoginDialog: false,
    anchorEl: null,
    open: false,
    handleOpenSignUpDialog: () => {},
    handleClick: () => {},
    handleCloseSignUpDialog: () => {},
    setAnchorEl: () => {},
    setOpenSignUpDialogTo: () => {},
    setOpenLoginDialogTo: () => {},
  });

const AvatarDropDownMenuProvider = (props: any) => {
  //States
  const [openSignUpDialog, setOpenSignUpDialogTo] =
    React.useState<boolean>(false);
  const [openLoginDialog, setOpenLoginDialogTo] =
    React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Open state for the dropdown menu
  const open = Boolean(anchorEl);

  // Handle click event for the dropdown menu.
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenSignUpDialog = () => {
    setOpenSignUpDialogTo(true);
  };

  const handleCloseSignUpDialog = () => {
    setOpenSignUpDialogTo(false);
  };

  // Close the dropdown menu when the sign up dialog is closed.
  // Can't figure out why the dialog keeps closing when signup is clicked.
  // It will stay open if I reopen the drop down menu. This is "temporary" fix.
  useEffect(() => {
    if (!openSignUpDialog) {
      setAnchorEl(null);
    }
  }, [openSignUpDialog]);

  return (
    <AvatarDropDownMenuContext.Provider
      value={{
        anchorEl,
        openSignUpDialog,
        setOpenLoginDialogTo,
        openLoginDialog,
        open,
        handleOpenSignUpDialog,
        handleClick,
        handleCloseSignUpDialog,
        setAnchorEl,
        setOpenSignUpDialogTo,
      }}
    >
      {props.children}
    </AvatarDropDownMenuContext.Provider>
  );
};

export const useAvatarDropDownMenu = () => {
  const {
    openSignUpDialog,
    openLoginDialog,
    anchorEl,
    open,
    handleOpenSignUpDialog,
    handleClick,
    handleCloseSignUpDialog,
    setAnchorEl,
    setOpenSignUpDialogTo,
    setOpenLoginDialogTo,
  } = React.useContext(AvatarDropDownMenuContext);

  return {
    openSignUpDialog,
    openLoginDialog,
    anchorEl,
    open,
    handleOpenSignUpDialog,
    handleClick,
    handleCloseSignUpDialog,
    setAnchorEl,
    setOpenSignUpDialogTo,
    setOpenLoginDialogTo,
  };
};

export default AvatarDropDownMenuProvider;
