// react
import React from "react";
import StandardDrawer from "../../StandardComponents/StandardDrawer/StandardDrawer";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import StandardSearch from "../../StandardComponents/StandardSearch/StandardSearch";

// third-party

// local

interface GroupedMenuSearchProps {}

const GroupedMenuSearch: React.FC<GroupedMenuSearchProps> = (
  props: GroupedMenuSearchProps
) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <StandardDrawer />
      <HeaderLogo />
      <StandardSearch />
    </>
  );
};

export default GroupedMenuSearch;
