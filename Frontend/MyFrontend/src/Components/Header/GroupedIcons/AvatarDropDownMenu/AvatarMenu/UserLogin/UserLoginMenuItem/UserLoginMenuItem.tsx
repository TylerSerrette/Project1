// react
import React from "react";

// third-party
import LoginIcon from "@mui/icons-material/Login";
import { MenuItem, ListItemIcon } from "@mui/material";

// local
import { useAvatarDropDownMenu } from "../../../../AvatarDropDownMenuContext/AvatarDropDownMenuContext";

interface UserLoginMenuItemProps {}

const UserLoginMenuItem: React.FC<UserLoginMenuItemProps> = (
  props: UserLoginMenuItemProps
) => {
  //Props
  const {} = props;

  //Constants

  //States
  const { setOpenLoginDialogTo } = useAvatarDropDownMenu();

  return (
    <>
      <MenuItem onClick={() => setOpenLoginDialogTo(true)}>
        <ListItemIcon>
          <LoginIcon fontSize="small" />
        </ListItemIcon>
        Login
      </MenuItem>
    </>
  );
};

export default UserLoginMenuItem;
