// react
import { PersonAdd } from "@mui/icons-material";
import { MenuItem, ListItemIcon } from "@mui/material";
import React, { useEffect, useState } from "react";
import StandardDialog from "../../../../../../StandardComponents/StandardDialog/StandardDialog";
import { useAvatarDropDownMenu } from "../../../../AvatarDropDownMenuContext/AvatarDropDownMenuContext";

// third-party

// local

interface UserSignUpMenuItemProps {}

const UserSignUpMenuItem: React.FC<UserSignUpMenuItemProps> = (
  props: UserSignUpMenuItemProps
) => {
  //Props
  const {} = props;

  //Constants

  //States
  const { openSignUpDialog, setOpenSignUpDialogTo } = useAvatarDropDownMenu();

  return (
    <>
      <MenuItem onClick={() => setOpenSignUpDialogTo(true)}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Sign up
      </MenuItem>
    </>
  );
};

export default UserSignUpMenuItem;
