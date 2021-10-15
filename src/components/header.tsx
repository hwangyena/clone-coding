import styled from "@emotion/styled";
import React from "react";
import { SetState } from "src/types";
import Navigation from "./navigation";
import Search from "./search";

const Wrapper = styled.header`
  nav {
    padding-top: 75px;
  }
`;

const Header = ({ setMenuVisible }: { setMenuVisible: SetState<boolean> }) => {
  return (
    <Wrapper>
      <Navigation setMenuVisible={setMenuVisible} />
      <Search />
    </Wrapper>
  );
};

export default Header;
