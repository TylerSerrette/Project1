// react
import React from "react";
import StandardDialog from "../../../../../../StandardComponents/StandardDialog/StandardDialog";
import { useAvatarDropDownMenu } from "../../../../AvatarDropDownMenuContext/AvatarDropDownMenuContext";

// third-party

// local

interface UserSignUpDialogProps {}

const UserSignUpDialog: React.FC<UserSignUpDialogProps> = (
  props: UserSignUpDialogProps
) => {
  //Props
  const {} = props;
  const { openSignUpDialog, setOpenSignUpDialogTo } = useAvatarDropDownMenu();

  //Constants

  //States

  return (
    <>
      <StandardDialog
        openDialog={openSignUpDialog}
        setOpenDialogTo={setOpenSignUpDialogTo}
      />
    </>
  );
};

export default UserSignUpDialog;
