// react
import * as React from "react";

// third-party

// local
import AvatarDropDownMenuButton from "./AvatarDropDownMenuButton/AvatarDropDownMenuButton";
import AvatarMenu from "./AvatarMenu/AvatarMenu";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <React.Fragment>
      <AvatarDropDownMenuButton handleClick={handleClick} open={open} />
      <AvatarMenu anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl} />
    </React.Fragment>
  );
}
