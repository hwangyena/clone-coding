import styled from "@emotion/styled";
import React from "react";

interface Props {}

const Wrapper = styled.div`
  /* margin: 0 22px; */
  padding-top: 75px;
  display: flex;
  justify-content: flex-end;
  font-size: 2vw;
  margin: 0 var(--gap);
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    .static {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 1;
    }
    .hover {
      opacity: 0;
      animation: marquee 10s infinite linear;
      white-space: nowrap;

      &::after {
        content: attr(data-hover);
      }
    }
    &:hover {
      .static {
        opacity: 0;
      }
      .hover {
        opacity: 1;
      }
    }

    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
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
        <span
          className="hover"
          data-hover="FILTER SEARCH &nbsp;&nbsp;&nbsp;&nbsp; FILTER SEARCH"
        >
          FILTER SEARCH &nbsp;&nbsp;&nbsp;&nbsp; FILTER SEARCH
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </button>
    </Wrapper>
  );
};

export default Search;
