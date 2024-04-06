// react
import React from "react";

// third-party
import { Box, Tooltip, IconButton } from "@mui/material";

// local
import UserAvatar from "../UserAvatar/UserAvatar";
import { useAvatarDropDownMenu } from "../../AvatarDropDownMenuContext/AvatarDropDownMenuContext";

interface AvatarDropDownMenuButtonProps {}

const AvatarDropDownMenuButton: React.FC<AvatarDropDownMenuButtonProps> = (
  props: AvatarDropDownMenuButtonProps
) => {
  //Props
  const {} = props;

  const { open, handleClick } = useAvatarDropDownMenu();

  //Constants

  //States

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <UserAvatar />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default AvatarDropDownMenuButton;
