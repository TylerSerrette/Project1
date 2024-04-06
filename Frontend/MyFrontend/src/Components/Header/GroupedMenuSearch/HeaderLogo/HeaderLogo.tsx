// react
import React from "react";

// third-party
import { Typography } from "@mui/material";

// local

interface HeaderLogoProps {}

const HeaderLogo: React.FC<HeaderLogoProps> = (props: HeaderLogoProps) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        MUI
      </Typography>
    </>
  );
};

export default HeaderLogo;
