import React from "react";
import styled from "@emotion/styled";
import { dummy } from "src/dummy";

const MainWrapper = styled.main`
  margin: 0 22px;
  display: grid;
  @media (min-width: 580px) {
    /* display: flex;
      flex-wrap: wrap;
      justify-content: space-around; */
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    gap: 0.5rem;
    /* display: flex;
      justify-content: space-around; */
    grid-template-columns: repeat(4, 1fr);
  }
  .item {
    /* width: 100%; */
    margin-top: 1.8rem;
    padding: 0 0 5rem;
    border-bottom: 1px solid var(--white);

    .image-section {
      cursor: pointer;
      position: relative;

      .image {
        width: 100%;
        aspect-ratio: 517 / 654;
        border: 1px solid var(--white);
      }
      .button {
        position: absolute;
        top: 1.1rem;
        right: 1.3rem;
        font-family: "Merriweather", serif;
        background: #f6f6f6;
        border: 1px solid var(--bg);
        border-radius: 50px;
        cursor: auto;
        font-size: 1.3rem;
        /* padding: 0.8rem 1.4rem; */
        color: var(--bg);
        font-weight: 700;
      }
    }
    .title {
      margin: 1.1rem 0 0;
      font-size: 2rem;
      font-family: "Bebas Neue", cursive;
    }

    @media (min-width: 1024px) {
      /* width: 23.5%; */
      /* flex: 1; */
      .image-section {
        .button {
          /* font-size: 1rem; */
          /* padding: 1.11rem 2.8rem 1.1rem; */
          top: 1.2rem;
          right: 1.8rem;
        }
      }
      .title {
        font-size: 1.5rem;
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
            <div className="button">
              {`RELEASES - ${v.release}`}
              {/* Release -
                {v.release} */}
              {/* <div className="date">{v.release}</div> */}
            </div>
          </div>
          <a className="title">{v.title}</a>
        </article>
      ))}
    </MainWrapper>
  );
};

export default Contents;
