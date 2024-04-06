// react
import { PersonAdd } from "@mui/icons-material";
import { MenuItem, ListItemIcon } from "@mui/material";
import React, { useState } from "react";
import StandardDialog from "../../../../../../StandardComponents/StandardDialog/StandardDialog";

// third-party

// local

interface UserSignUpMenuItemProps {
  setAnchorEl: (value: React.SetStateAction<HTMLElement | null>) => void;
}

const UserSignUpMenuItem: React.FC<UserSignUpMenuItemProps> = (
  props: UserSignUpMenuItemProps
) => {
  //Props
  const { setAnchorEl } = props;

  //Constants

  //States
  const [openSignUpDialog, setOpenSignUpDialogTo] = useState<boolean>(false);

  //move to context
  const handleClose = () => {
    setAnchorEl(null);
  };

  //move to context
  const handleClick = () => {
    handleClose;
    setOpenSignUpDialogTo(true);
  };

  return (
    <>
      <MenuItem onClick={handleClick}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Sign up
      </MenuItem>
      <StandardDialog
        openDialog={openSignUpDialog}
        setOpenDialogTo={setOpenSignUpDialogTo}
      />
    </>
  );
};

export default UserSignUpMenuItem;
