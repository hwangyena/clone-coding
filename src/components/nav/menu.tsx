import styled from "@emotion/styled";
import React from "react";
import cn from "classnames";
import Link from "next/link";

interface Props {}

const Wrapper = styled.nav`
  background: var(--bg);
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
  padding: 55px 0 0;
  transform: translateX(100%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  &.visible {
    transform: translateX(0);
  }
`;

const MainMenu = ({ menuVisible }: { menuVisible: boolean }) => {
  return (
    <Wrapper className={cn({ visible: menuVisible })}>
      <div className="content">
        <Link href={"/home"} passHref>
          <a>
            <h1>Home</h1>
          </a>
        </Link>
        <h1>Launches</h1>
        <h1>Sneakers</h1>
        <h1>Kids</h1>
        <h1>Apparel</h1>
        <h1>Accessories</h1>
        <h1>Culture</h1>
        <span>account</span>
        <span>wishlist</span>
        <span>contact</span>
      </div>
    </Wrapper>
  );
};

export default MainMenu;
