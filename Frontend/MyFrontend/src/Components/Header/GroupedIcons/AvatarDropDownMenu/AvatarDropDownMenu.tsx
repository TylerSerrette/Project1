// react
import * as React from "react";

// third-party

// local
import AvatarDropDownMenuButton from "./AvatarDropDownMenuButton/AvatarDropDownMenuButton";
import AvatarMenu from "./AvatarMenu/AvatarMenu";
import { useAvatarDropDownMenu } from "./AvatarDropDownMenuContext/AvatarDropDownMenuContext";

export default function AccountMenu() {
  const { anchorEl, open, setAnchorEl } = useAvatarDropDownMenu();
  return (
    <React.Fragment>
      <AvatarDropDownMenuButton />
      <AvatarMenu anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl} />
    </React.Fragment>
  );
}
