// react
import * as React from "react";

// third-party

// local
import AvatarDropDownMenuButton from "./AvatarDropDownMenuButton/AvatarDropDownMenuButton";
import AvatarMenu from "./AvatarMenu/AvatarMenu";

export default function AccountMenu() {
  return (
    <React.Fragment>
      <AvatarDropDownMenuButton />
      <AvatarMenu />
    </React.Fragment>
  );
}
