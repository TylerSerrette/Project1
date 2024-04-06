// react
import React, { createContext, useContext } from "react";

// third-party

// local

export type AvatarDropDownMenuContextProps = {
  openSignUpDialog: boolean;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleOpenSignUpDialog: () => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseSignUpDialog: () => void;
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  setOpenSignUpDialogTo: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AvatarDropDownMenuContext =
  createContext<AvatarDropDownMenuContextProps>({
    openSignUpDialog: false,
    anchorEl: null,
    open: false,
    handleOpenSignUpDialog: () => {},
    handleClick: () => {},
    handleCloseSignUpDialog: () => {},
    setAnchorEl: () => {},
    setOpenSignUpDialogTo: () => {},
  });

const AvatarDropDownMenuProvider = (props: any) => {
  //States
  const [openSignUpDialog, setOpenSignUpDialogTo] =
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

  return (
    <AvatarDropDownMenuContext.Provider
      value={{
        anchorEl,
        openSignUpDialog,
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
    anchorEl,
    open,
    handleOpenSignUpDialog,
    handleClick,
    handleCloseSignUpDialog,
    setAnchorEl,
    setOpenSignUpDialogTo,
  } = React.useContext(AvatarDropDownMenuContext);

  return {
    openSignUpDialog,
    anchorEl,
    open,
    handleOpenSignUpDialog,
    handleClick,
    handleCloseSignUpDialog,
    setAnchorEl,
    setOpenSignUpDialogTo,
  };
};

export default AvatarDropDownMenuProvider;
