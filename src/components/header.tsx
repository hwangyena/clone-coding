import React, { ReactElement } from "react";
import Logo from "./logo";
import styled from "@emotion/styled";
import { GoGrabber } from "react-icons/go";
import Hambuger from "./hambuger";

interface Props {}

const Navbar = styled.div`
  border-bottom: 1px solid #fff;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #000;

  .hambuger {
    padding: 20px;

    .text {
      position: fixed;
      right: 86px;
      top: 21px;
      font-size: small;
      span {
        margin-left: 10px;
      }
    }

    .hambuger-button {
      position: absolute;
      right: 0;
      top: 0;
      padding: 15px;
      border-left: 1px solid #fff;
      cursor: pointer;
    }
  }

  @media (min-width: 1024px) {
    .hambuger {
      visibility: hidden;
    }
  }
`;

function Header({}: Props): ReactElement {
  return (
    <>
      <Navbar>
        <div className="hambuger">
          <Logo width="100px" />
          <div className="text">
            <span>SEARCH</span>
            <span>BAG (0)</span>
          </div>
          <div className="hambuger-button">
            <Hambuger size="24" />
          </div>
        </div>

        {/* <div className="computer">

        </div> */}
      </Navbar>
    </>
  );
}

export default Header;
