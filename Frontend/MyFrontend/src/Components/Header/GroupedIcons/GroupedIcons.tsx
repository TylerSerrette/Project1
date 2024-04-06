// react
import React from "react";

// third-party

// local
import NotificationIconButtons from "./NotificationIconButtons/NotificationIconButtons";
import { Box } from "@mui/material";
import AvatarDropDownMenu from "./AvatarDropDownMenu/AvatarDropDownMenu";

interface GroupedIconsProps {}

const GroupedIcons: React.FC<GroupedIconsProps> = (
  props: GroupedIconsProps
) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <NotificationIconButtons />
        <AvatarDropDownMenu />
      </Box>
    </>
  );
};

export default GroupedIcons;
