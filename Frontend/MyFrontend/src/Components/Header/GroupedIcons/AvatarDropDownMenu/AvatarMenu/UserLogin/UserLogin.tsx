// react
import React from "react";
import UserLoginMenuItem from "./UserLoginMenuItem/UserLoginMenuItem";
import UserLoginDialog from "./UserLoginDialog/UserLoginDialog";

// third-party

// local

interface UserLoginProps {}

const UserLogin: React.FC<UserLoginProps> = (props: UserLoginProps) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <UserLoginMenuItem />
      <UserLoginDialog />
    </>
  );
};

export default UserLogin;
