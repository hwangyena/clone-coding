import React from "react";
import styled from "@emotion/styled";
import { dummy } from "src/dummy";

const MainWrapper = styled.main`
  display: grid;
  @media (min-width: 580px) {
    margin-top: 21px;
    gap: var(--gap);
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    margin-top: 1.5rem;
    gap: 1.8rem 1.3rem;
    grid-template-columns: repeat(4, 1fr);
  }
  .item {
    padding: 0 0 16%;
    border-bottom: 1px solid var(--white);
    margin-top: 1.8rem;

    @media (min-width: 1024px) {
      margin-top: 0;
    }

    .image-section {
      cursor: pointer;
      position: relative;

      .image {
        width: 100%;
        aspect-ratio: 515 / 654;
        border: 1px solid var(--white);
        @media (min-width: 580px) and (max-width: 1024px) {
          aspect-ratio: 290 / 403;
        }
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
        font-size: 1.5rem;

        @media (min-width: 580px) {
          font-size: 1.5rem;
        }
        @media (min-width: 1024px) {
          padding: 3% 8%;
          font-size: 1.1rem;
        }
      }
    }
    .title {
      margin: 2% 0 0;
      font-size: 2.5rem;
      font-family: "Bebas Neue", cursive;
      @media (min-width: 580px) {
        /* font-size: 1em; */
      }
      @media (min-width: 1024px) {
        font-size: 2em;
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
