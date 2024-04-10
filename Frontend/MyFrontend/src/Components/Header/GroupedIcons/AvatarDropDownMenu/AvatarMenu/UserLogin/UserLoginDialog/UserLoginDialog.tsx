// react
import React from "react";

// third-party
import StandardDialog from "../../../../../../StandardComponents/StandardDialog/StandardDialog";
import { useAvatarDropDownMenu } from "../../../../AvatarDropDownMenuContext/AvatarDropDownMenuContext";
import UserLoginForm from "./UserLoginForm/UserLoginForm";
// local

interface UserLoginDialogProps {}

const UserLoginDialog: React.FC<UserLoginDialogProps> = (
  props: UserLoginDialogProps
) => {
  //Props
  const {} = props;
  const { openLoginDialog, setOpenLoginDialogTo } = useAvatarDropDownMenu();

  //Constants

  //States

  return (
    <>
      <StandardDialog
        openDialog={openLoginDialog}
        setOpenDialogTo={setOpenLoginDialogTo}
        title="Login"
        contentText="Login to access your account"
        content={
          <>
            <UserLoginForm />
          </>
        }
      />
    </>
  );
};

export default UserLoginDialog;
