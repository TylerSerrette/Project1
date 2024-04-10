// react
import React from "react";

// third-party

// local
import UserSignUpMenuItem from "./UserSignUpMenuItem/UserSignUpMenuItem";
import UserSignUpDialog from "./UserSignUpDialog/UserSignUpDialog";
import UserSignUpForm from "./UserSignUpDialog/UserSignUpForm/UserSignUpForm";

interface UserSignUpProps {}

const UserSignUp: React.FC<UserSignUpProps> = (props: UserSignUpProps) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <UserSignUpMenuItem />
      <UserSignUpDialog />
      {/* <UserSignUpForm /> */}
    </>
  );
};

export default UserSignUp;
