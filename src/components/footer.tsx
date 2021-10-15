import styled from "@emotion/styled";
import React, { ChangeEvent, useState } from "react";
import Logo from "src/icons/logo";
import cn from "classnames";
import { validateEmail } from "src/common/function";
import Validation from "./validation";

const Wrapper = styled.footer`
  ul {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
    li {
      list-style: none;
    }
  }
  .input-email {
    position: relative;
    input {
      font-family: "Merriweather", serif;
      background: var(--bg);
      color: var(--white);
      border: 1.5px solid #000;
      line-height: 35px;
      font-size: 16px;
      font-weight: 200;
      padding-left: 16px;
      &::placeholder {
        color: var(--white);
      }
      &:focus {
        /* background: red; */
        outline: none;
        box-shadow: var(--hover-color) 0px 0px 5px;
      }
    }
    &.validate {
      input {
        border: 1.5px solid var(--warning) !important;
      }
    }
  }

  @media (min-width: 580px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    margin: 4.8rem 0 0;
    padding: 3rem 0 2rem;

    .container {
      display: grid;
      grid-template-areas:
        "join us policy order"
        "logo logo logo logo"
        "rights rights sns sns";
      grid-template-columns: 5fr repeat(3, 1fr);
      grid-template-rows: auto auto auto;
      grid-auto-flow: row;
      /* grid-template-columns: repeat(3,); */
      .item-join {
        margin: 0 0 4rem;
        .title {
          font-family: "Bebas Neue", cursive;

          font-size: 2rem;
          /* line-height: 5rem; */
          margin: 0 0 0.8rem;
        }
        .input-email {
          width: 16rem;
          display: flex;
          align-self: center;
          input {
            width: 100%;
          }
        }
      }
      .item-policy {
      }
      .item-order {
      }
      .item-logo {
        grid-column: 1 / span 4;
      }
      .item-rigths {
      }
      .item-sns {
        grid-column: 3/5;
        justify-self: flex-end;
      }
    }
  }
`;
interface Props {}

const Footer = (props: Props) => {
  const [input, setInput] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(false);

  const onFocus = (focus: boolean, e?: ChangeEvent<HTMLInputElement>) => {
    /** email 확인 */
    e && setInput(e?.target.value);
    if (focus && input.length === 0) return;
    validateEmail(e ? e.target.value : input)
      ? setIsEmail(false)
      : setIsEmail(true);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="item-join">
          <h3 className="title">JOIN OUR COMMUNITY</h3>
          <div className={cn({ validate: isEmail }, "input-email")}>
            <input
              onFocus={() => onFocus(true)}
              type="text"
              placeholder="Email"
              value={input}
              onChange={(e) => onFocus(false, e)}
            />
            {isEmail && <Validation />}
          </div>
        </div>
        <div className="item-us">
          <ul>
            <li>{`ABOUT US`}</li>
            <li>{`FAQ`}</li>
            <li>{`CONTACK US`}</li>
          </ul>
        </div>
        <div className="item-policy">
          <ul>
            <li>{`Provacy policy`}</li>
            <li>{`celivery policy`}</li>
            <li>{`terms of use`}</li>
          </ul>
        </div>
        <div className="item-order">
          <ul>
            <li>{`How to order`}</li>
            <li>{`Track your order`}</li>
            <li>{`Return & Exchanges`}</li>
          </ul>
        </div>
        <div className="item-logo">
          <Logo />
        </div>
        <div className="item-rights">
          <span>2021 JACK LEMKUS - ALL RIGHTS RESERVED</span>
        </div>
        <div className="item-sns">
          <span>INSTAGRAM</span>
          <span>TWITTER</span>
          <span>FACEBOOK</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
