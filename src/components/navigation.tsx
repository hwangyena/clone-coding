import React, { ReactElement } from "react";
import Logo from "src/icons/logo";
import styled from "@emotion/styled";
// import { GoGrabber } from "react-icons/go";
import Hambuger from "src/icons/hambuger";

interface Props {}

const Navbar = styled.div`
  border-bottom: 1px solid var(--white);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: var(--bg);

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
      border-left: 1px solid var(--white);
      cursor: pointer;
    }
  }
  .navbar {
    display: none;
  }

  @media (min-width: 1024px) {
    .hambuger {
      display: none;
      /* visibility: hidden; */
    }
    .navbar {
      display: block;
    }
  }
`;

function Navigation({}: Props): ReactElement {
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

        <div className="navbar">
          <Logo width="100px" />
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
