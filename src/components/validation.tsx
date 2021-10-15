import styled from "@emotion/styled";
import React from "react";

interface Props {}

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 3%;
  z-index: 5;
  width: fit-content;
  text-transform: uppercase;
  /* height: 5rem; */
  background: var(--warning-bg);
  border: 1px solid var(--warning);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 8px;
    color: var(--warning);
    font-size: 14px;
    font-family: "Merriweather", serif;
    font-weight: lighter;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -16px;
    left: 7px;
    width: 0;
    height: 0;
    border: 8px solid var(--warning);
    border-color: transparent transparent var(--warning);
  }

  &::after {
    content: "";
    position: absolute;
    top: -14px;
    left: 8px;
    border-width: 8px;
    border: 7px solid var(--warning-bg);
    border-color: transparent transparent var(--warning-bg);
  }
`;

const Validation = (props: Props) => {
  return (
    <Wrapper>
      {/* <div className="message" /> */}
      <span>Please Enter a valid emila address</span>
    </Wrapper>
  );
};

export default Validation;
