import React, { ReactElement } from "react";
import Logo from "src/icons/logo";
import styled from "@emotion/styled";
// import { GoGrabber } from "react-icons/go";
import Hambuger from "src/icons/hambuger";

interface Props {}

const Navbar = styled.div`
  --fix-top: 18px;
  --fix-right: 86px;
  border-bottom: 1px solid var(--white);
  position: fixed;
  width: 100vw;
  z-index: 10;
  height: 55px;
  background: var(--bg);

  .logo {
    display: flex;
    position: fixed;
    width: 100px;
    left: var(--gap);
    top: 20px;
  }
  .menu-search-bag {
    position: fixed;
    top: var(--fix-top);
    right: var(--fix-right);
    /* font-size: 0.3rem; */
    font-size: 12.1px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    & span:first-child {
      margin-right: 16px;
    }
  }
  .hambuger {
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    width: 65px;
    height: 55px;
    align-items: center;
    justify-content: center;
    border-left: 1px solid var(--white);
    cursor: pointer;
  }
  .navbar {
    display: none;
  }

  @media (min-width: 1024px) {
    height: 1rem;
    .logo {
      top: 0.35rem;
      width: 2.3rem;
    }
    /* .hambuger {
      display: none;
      visibility: hidden;
    }
    .navbar {
      display: block;
    } */
    .menu-search-bag {
      display: none;
    }
    .hambuger {
      display: none;
    }
  }
`;

function Navigation({}: Props): ReactElement {
  return (
    <>
      <Navbar>
        <span className="logo">
          <Logo />
        </span>
        {/* hambuger */}
        <div className="menu-search-bag">
          <span>SEARCH</span>
          <span>BAG (0)</span>
        </div>
        <div className="hambuger">
          <Hambuger size="24" />
        </div>

        {/* <div className="navbar">
          <Logo width="100px" />
        </div> */}
      </Navbar>
    </>
  );
}

export default Navigation;
