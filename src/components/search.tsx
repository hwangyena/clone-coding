import styled from "@emotion/styled";
import React from "react";

interface Props {}

const Wrapper = styled.div`
  margin: 0 22px;
  padding-top: 75px;
  display: flex;
  justify-content: flex-end;
  font-size: 2vw;

  .button {
    cursor: pointer;
    background: var(--white);
    border-radius: 50px;
    font-family: "Merriweather", serif;
    font-weight: bolder;
    /* font-size: ; */
    /* &:hover {
      background: red;
    } */
  }

  @media (min-width: 580px) {
    margin: 0 0.5rem;
  }
  @media (min-width: 1024px) {
    margin: 0 0.5rem;
    padding: 1.3rem 0 0;
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
