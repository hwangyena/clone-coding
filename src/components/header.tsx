import styled from "@emotion/styled";
import React from "react";
import Navigation from "./navigation";
import Search from "./search";

const Wrapper = styled.header`
  nav {
    padding-top: 75px;
  }
`;
interface Props {}

const Header = (props: Props) => {
  return (
    <Wrapper>
      <Navigation />
      <Search />
    </Wrapper>
  );
};

export default Header;
