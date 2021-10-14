import styled from "@emotion/styled";
import React from "react";

interface Props {}

const Wrapper = styled.div`
  /* margin: 0 22px; */
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
    overflow: hidden;
    width: 18.2rem;
    height: 3.9rem;
    font-size: 1.6rem;
    /* &:hover {
      background: red;
    } */

    .static {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .hover {
      opacity: 1;
    }
    :hover {
      .hover {
        opacity: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 5rem 0 0;
    .button {
      width: 13rem;
      height: 3rem;
      font-size: 1.1rem;
    }
  }
`;
const Search = (props: Props) => {
  return (
    <Wrapper>
      <button className="button">
        <span className="static">FILTER SEARCH</span>
        {/* <span className="hover">
          FILTER SEARCH FILTER SEARCH FILFTER SEARCH
        </span> */}
      </button>
    </Wrapper>
  );
};

export default Search;
