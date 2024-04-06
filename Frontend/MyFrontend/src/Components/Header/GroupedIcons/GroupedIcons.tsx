// react
import React from "react";

// third-party

// local
import NotificationIconButtons from "./NotificationIconButtons/NotificationIconButtons";
import { Box } from "@mui/material";
import AvatarDropDownMenu from "./AvatarDropDownMenu/AvatarDropDownMenu";
import AvatarDropDownMenuProvider from "./AvatarDropDownMenuContext/AvatarDropDownMenuContext";

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
      <AvatarDropDownMenuProvider>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <NotificationIconButtons />
          <AvatarDropDownMenu />
        </Box>
      </AvatarDropDownMenuProvider>
    </>
  );
};

export default GroupedIcons;
