import React, { ReactElement } from "react";
import Logo from "src/icons/logo";
import styled from "@emotion/styled";
// import { GoGrabber } from "react-icons/go";
import Hambuger from "src/icons/hambuger";

interface Props {}

const Navbar = styled.div`
  --fix-top: 18px;
  --fix-main-top: 1rem;
  --fix-right: 86px;
  --main-font: 1.05rem;

  border-bottom: 1px solid var(--white);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10;
  height: 55px;
  background: var(--bg);
  font-weight: 600;
  font-family: "Open Sans", sans-serif;

  .logo {
    display: inline-block;
    position: fixed;
    width: 100px;
    left: var(--gap);
    top: 20px;
    cursor: pointer;
  }
  .main-menu {
    position: fixed;
    padding: 0;
    top: 0.8rem;
    left: 15rem;
    text-transform: uppercase; /*대문자*/
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.5rem;
      margin: 0;
      li {
        list-style: none;
        font-size: var(--main-font);
        cursor: pointer;
      }
      #curture {
        border-radius: 50px;
        border: 1px solid var(--white);
        span {
          padding: 0.2rem 0.9rem;
        }
      }
    }
  }
  .menu-acc-wish {
    position: fixed;
    top: var(--fix-main-top);
    font-size: var(--main-font);
    right: 15rem;
    cursor: pointer;
    & span:first-child {
      margin-right: 3rem;
    }
  }

  .menu-search-bag {
    position: fixed;
    top: var(--fix-top);
    right: var(--fix-right);
    font-size: 12.1px;
    & span:first-child {
      margin-right: 16px;
      cursor: pointer;
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
  }

  .main-menu > ul > li,
  .menu-acc-wish > span,
  .menu-search-bag > span {
    &:not(#curture) {
      transition: color 0.2s ease-out;
      &:hover {
        color: var(--hover-color);
      }
    }
  }

  @media (max-width: 1024px) {
    .navbar,
    .main-menu,
    .menu-acc-wish {
      display: none;
    }
    .hambuger {
      visibility: visible;
    }
  }

  @media (min-width: 1024px) {
    height: 3.7rem;
    .logo {
      top: 1.4rem;
      width: 9rem;
    }
    .navbar,
    .main-menu,
    .menu-acc-wish {
      display: block;
    }
    .hambuger {
      /* display: none; */
      visibility: hidden;
    }
    .menu-search-bag {
      top: var(--fix-main-top);
      cursor: pointer;
      right: var(--gap);
      font-size: var(--main-font);

      & span:first-child {
        margin-right: 3rem;
      }
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
        <nav className="main-menu">
          <ul>
            <li>Lanches</li>
            <li>Sneakers</li>
            <li>Apparel</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li id="curture">
              <span>Curture</span>
            </li>
          </ul>
        </nav>
        <div className="menu-acc-wish">
          <span>Account</span>
          <span>WishList (0)</span>
        </div>
        <div className="menu-search-bag">
          <span>SEARCH</span>
          <span>BAG (0)</span>
        </div>
        <div className="hambuger">
          <Hambuger size="24" />
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
