// react
import { PersonAdd } from "@mui/icons-material";
import { MenuItem, ListItemIcon } from "@mui/material";
import React, { useState } from "react";
import StandardDialog from "../../../../../../StandardComponents/StandardDialog/StandardDialog";

// third-party

// local

interface UserSignUpMenuItemProps {
  handleClose: () => void;
}

const UserSignUpMenuItem: React.FC<UserSignUpMenuItemProps> = (
  props: UserSignUpMenuItemProps
) => {
  //Props
  const { handleClose } = props;

  //Constants

  //States
  const [openSignUpDialog, setOpenSignUpDialogTo] = useState<boolean>(false);

  return (
    <>
      <MenuItem
        onClick={() => {
          handleClose;
          setOpenSignUpDialogTo(true);
        }}
      >
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
