// react
import React from "react";

// third-party
import { IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

// local

interface NotificationIconButtonsProps {}

const NotificationIconButtons: React.FC<NotificationIconButtonsProps> = (
  props: NotificationIconButtonsProps
) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  );
};

export default NotificationIconButtons;
