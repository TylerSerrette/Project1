// react
import React from "react";

// third-party
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./StandardSearch.helpers";
import SearchIcon from "@mui/icons-material/Search";

// local

interface StandardSearchProps {}

const StandardSearch: React.FC<StandardSearchProps> = (
  props: StandardSearchProps
) => {
  //Props
  const {} = props;

  //Constants

  //States

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
};

export default StandardSearch;
