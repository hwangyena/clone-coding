import styled from "@emotion/styled";
import React from "react";
import Logo from "src/icons/logo";

const Wrapper = styled.footer``;
interface Props {}

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <footer>
        <div className="top">
          <div className="left">
            <h3>JOIN OUR COMMUNITY</h3>
            <input type="text" name="" id="" placeholder="Email" />
          </div>
          <div className="right">
            <ul>
              <li>ABOUT US</li>
              <li>FAQ</li>
              <li>CONTACK US</li>
            </ul>
          </div>
        </div>
        <img src="" alt="logo" />
        <Logo />

        <div className="bottom">
          <span>2021 JACK LEMKUS - ALL RIGHTS RESERVED</span>
          <div className="sns">
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>FACEBOOK</span>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
