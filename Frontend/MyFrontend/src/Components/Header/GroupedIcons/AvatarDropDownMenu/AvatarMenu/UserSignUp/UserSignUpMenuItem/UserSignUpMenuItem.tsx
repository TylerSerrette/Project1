// react
import React from "react";

// third-party
import { PersonAdd } from "@mui/icons-material";
import { MenuItem, ListItemIcon } from "@mui/material";

// local
import { useAvatarDropDownMenu } from "../../../../AvatarDropDownMenuContext/AvatarDropDownMenuContext";

interface UserSignUpMenuItemProps {}

const UserSignUpMenuItem: React.FC<UserSignUpMenuItemProps> = (
  props: UserSignUpMenuItemProps
) => {
  //Props
  const {} = props;

  //Constants

  //States
  const { setOpenSignUpDialogTo } = useAvatarDropDownMenu();

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
