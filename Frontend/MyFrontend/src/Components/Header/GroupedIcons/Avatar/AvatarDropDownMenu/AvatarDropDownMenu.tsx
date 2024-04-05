import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import UserAvatar from "../UserAvatar/UserAvatar";
import AvatarDropDownMenuButton from "../AvatarDropDownMenuButton/AvatarDropDownMenuButton";
import AvatarMenu from "../AvatarMenu/AvatarMenu";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <React.Fragment>
      <AvatarDropDownMenuButton handleClick={handleClick} open={open} />
      <AvatarMenu anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl} />
    </React.Fragment>
  );
}
