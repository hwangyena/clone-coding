import styled from "@emotion/styled";
import React, { ChangeEvent, useState } from "react";
import Logo from "src/icons/logo";
import cn from "classnames";
import { validateEmail } from "src/common/function";
import Validation from "./validation";
import { debounce } from "lodash";

const Wrapper = styled.footer`
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  text-transform: uppercase;
  padding: 0 0 2rem;

  .container {
    display: grid;
    grid-template-areas:
      "join join"
      "us order"
      "policy sns"
      "logo logo"
      "rights rigths";
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: ; */

    .item-join {
      grid-area: join;
      margin-bottom: 3rem;
      .title {
        font-family: "Bebas Neue", cursive;
        font-size: 2.6rem;
        margin: 0 0 0.8rem;
      }
      .input-email {
        position: relative;
        display: flex;
        align-self: center;
        width: 60rem;

        input {
          width: 100%;
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
    }
    .item-us {
      grid-area: us;
    }
    .item-order {
      grid-area: order;
    }
    .item-policy {
      grid-area: policy;
    }
    .item-sns {
      grid-area: sns;
    }
    .item-logo {
      grid-area: logo;
      padding: 6rem 0 3rem;
    }
    .item-rights {
      grid-area: rights;
      grid-column: 1 / 3;
    }
    .item-policy,
    .item-order,
    .item-us,
    .item-sns,
    .item-rights {
      font-size: 14px;
      letter-spacing: 0.4px;
      white-space: nowrap;
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
        }
        span {
          cursor: pointer;
          margin-bottom: 0.7rem;
        }
      }
    }

    .item-policy,
    .item-sns {
      margin: 17px 0 0;
    }
  }

  @media (min-width: 1024px) {
    transition: border 0.2s ease-out;
    margin: 4.8rem 0 0;
    padding: 3rem 0 2rem;

    .container {
      grid-template-areas:
        "join us policy order"
        "logo logo logo logo"
        "rights rights sns sns";
      grid-template-columns: 5fr repeat(3, 1fr);
      grid-template-rows: auto auto auto;
      grid-auto-flow: row;
      .item-join {
        .title {
          font-size: 2rem;
        }
        .input-email {
          width: 16rem;
        }
      }
      .item-policy,
      .item-order,
      .item-us,
      .item-sns,
      .item-rights {
        font-size: 0.8rem;
        margin: 0;
        ul > li > span {
          margin-bottom: 0.5rem;
          transition: border 0.2s ease-out;
          border: 1px solid transparent;
          border-radius: 50px;
          padding: 0.1px 0.4rem;
          &:hover {
            border: 1px solid var(--white);
          }
        }
      }
      .item-logo {
        padding: 3rem 0 5rem;
        cursor: pointer;
      }
      .item-sns {
        justify-self: flex-end;
        ul > li {
          margin-left: 1.5rem;
          display: inline-block;
        }
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
    const a = debounce(() => {
      validateEmail(e ? e.target.value : input)
        ? setIsEmail(false)
        : setIsEmail(true);
      console.count();
    }, 5000);
    a();
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
            <li>
              <span>{`ABOUT US`}</span>
            </li>
            <li>
              <span>{`FAQ`}</span>
            </li>
            <li>
              <span>{`CONTACK US`}</span>
            </li>
          </ul>
        </div>
        <div className="item-policy">
          <ul>
            <li>
              <span>{`Privacy policy`}</span>
            </li>
            <li>
              <span>{`celivery policy`}</span>
            </li>
            <li>
              <span>{`terms of use`}</span>
            </li>
          </ul>
        </div>
        <div className="item-order">
          <ul>
            <li>
              <span>{`How to order`}</span>
            </li>
            <li>
              <span>{`Track your order`}</span>
            </li>
            <li>
              <span>{`Return & Exchanges`}</span>
            </li>
          </ul>
        </div>
        <div className="item-logo">
          <Logo />
        </div>
        <div className="item-rights">
          <span>© 2021 JACK LEMKUS - ALL RIGHTS RESERVED</span>
        </div>
        <div className="item-sns">
          <ul>
            <li>
              <span>INSTAGRAM</span>
            </li>
            <li>
              <span>TWITTER</span>
            </li>
            <li>
              <span>FACEBOOK</span>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
