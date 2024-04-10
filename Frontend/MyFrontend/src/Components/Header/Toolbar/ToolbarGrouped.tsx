// react
import React from "react";

// third-party
import Toolbar from "@mui/material/Toolbar";
import GroupedMenuSearch from "../GroupedMenuSearch/GroupedMenuSearch";
import { Box } from "@mui/material";
import GroupedIcons from "../GroupedIcons/GroupedIcons";
import AvatarDropDownMenuProvider from "../GroupedIcons/AvatarDropDownMenuContext/AvatarDropDownMenuContext";

// local

interface ToolbarProps {}

const ToolbarGrouped: React.FC<ToolbarProps> = (props: ToolbarProps) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <AvatarDropDownMenuProvider>
        <Toolbar>
          <GroupedMenuSearch />
          <Box sx={{ flexGrow: 1 }} />
          <GroupedIcons />
        </Toolbar>
      </AvatarDropDownMenuProvider>
    </>
  );
};

export default ToolbarGrouped;
