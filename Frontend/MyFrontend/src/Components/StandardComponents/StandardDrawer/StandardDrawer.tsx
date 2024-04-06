// react
import React from "react";

// third-party
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

// local

interface StandardDrawerProps {}

const StandardDrawer: React.FC<StandardDrawerProps> = (
  props: StandardDrawerProps
) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default StandardDrawer;
