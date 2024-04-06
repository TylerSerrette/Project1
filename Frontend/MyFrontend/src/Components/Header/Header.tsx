// react
import * as React from "react";

// third-party
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

// local
import ToolbarGrouped from "./Toolbar/ToolbarGrouped";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolbarGrouped />
      </AppBar>
    </Box>
  );
};

export default Header;
