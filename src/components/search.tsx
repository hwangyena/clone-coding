import styled from "@emotion/styled";
import React from "react";

interface Props {}

const Wrapper = styled.div`
  padding-top: 75px;

  .button {
    cursor: pointer;
    padding: 1rem;
    background: var(--white);
    border-radius: 50px;
    font-family: "Merriweather", serif;
    /* &:hover {
      background: red;
    } */
  }
`;
const Search = (props: Props) => {
  return (
    <Wrapper>
      <button className="button">FILFTER SEARCH</button>
    </Wrapper>
  );
};

export default Search;
