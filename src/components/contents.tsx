import React from "react";
import styled from "@emotion/styled";
import { dummy } from "src/dummy";

const MainWrapper = styled.main`
  margin: 0 22px;
  display: grid;
  @media (min-width: 580px) {
    margin: 0 0.5rem;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around; */
    gap: var(--gap);
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    margin: 0 0.5rem;
    gap: var(--gap);
    /* display: flex;
      justify-content: space-around; */
    grid-template-columns: repeat(4, 1fr);
  }
  .item {
    margin-top: 1rem;
    padding: 0 0 16%;
    border-bottom: 1px solid var(--white);
    /* font-size: 4vw; */

    .image-section {
      cursor: pointer;
      position: relative;
      font-size: inherit;

      .image {
        width: 100%;
        aspect-ratio: 515 / 654;
        border: 1px solid var(--white);
        /* @media (min-width: 580px) {
          aspect-ratio: 290 / 403;
        } */
      }
      .sub-title {
        position: absolute;
        top: 0.8em;
        right: 1em;
        font-family: "Merriweather", serif;
        background: #f6f6f6;
        border: 1px solid var(--bg);
        border-radius: 50px;
        cursor: auto;
        color: var(--bg);
        padding: 2% 4%;
        font-weight: 700;
        text-transform: uppercase;

        @media (min-width: 580px) {
          font-size: 0.5rem;
        }
        @media (min-width: 1024px) {
          padding: 3% 8%;
          font-size: 0.3rem;
        }
      }
    }
    .title {
      margin: 2% 0 0;
      font-size: 1.6em;
      font-family: "Bebas Neue", cursive;
      @media (min-width: 580px) {
        font-size: 1em;
      }
      @media (min-width: 1024px) {
        font-size: 0.5em;
      }
    }
  }
`;
interface Props {}

const Contents = (props: Props) => {
  return (
    <MainWrapper>
      {dummy.map((v) => (
        <article className="item" key={v.id}>
          <div className="image-section">
            <img src={v.image} alt="content" className="image" />
            <div className="sub-title">{`${v.subtitle} - ${v.release}`}</div>
          </div>
          <div className="title">
            <a>{v.title}</a>
          </div>
        </article>
      ))}
    </MainWrapper>
  );
};

export default Contents;
