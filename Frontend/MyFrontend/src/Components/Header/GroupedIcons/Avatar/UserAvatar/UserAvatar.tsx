// react
import React from "react";

// third-party
import { Avatar, AvatarProps } from "@mui/material";

// local

interface UserAvatarProps {
  image?: any;
  onClick?: () => void;
  avatarProps?: AvatarProps;
}

const UserAvatar: React.FC<UserAvatarProps> = (props: UserAvatarProps) => {
  //Props
  const { image, onClick, avatarProps } = props;

  //Constants

  //States

  return (
    <>
      <Avatar onClick={() => onClick} src={image} {...avatarProps} />
    </>
  );
};

export default UserAvatar;
