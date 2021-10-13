import React from "react";
import styled from "@emotion/styled";
import { dummy } from "src/dummy";

interface Props {}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1.8rem;
  padding: 0 0 5rem;
  border-bottom: 1px solid var(--white);

  .card-inner {
    cursor: pointer;
    .card-image {
      position: relative;
      .card-button {
        position: absolute;
        top: 1.1rem;
        right: 1.3rem;
        font-family: "Merriweather", serif;
        background: #f6f6f6;
        border: 1px solid var(--bg);
        border-radius: 50px;
        cursor: auto;
        display: flex;
        padding: 0.5rem 1.4rem;
        color: var(--bg);
        font-weight: 700;
        font-size: 1rem;
        height: fit-content;
      }
      img {
        width: 100%;
        aspect-ratio: 517 / 654;
        border: 1px solid var(--white);
      }
    }

    .title {
      margin: 1.1rem 0 0;
      font-size: 2rem;
      font-family: "Bebas Neue", cursive;
    }
  }

  @media (min-width: 580px) {
    /* background: red; */
    width: 48%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    .card-inner {
      .card-image {
        .card-button {
          font-size: 0.7rem;
          /* font-weight: 300; */
        }
      }
      .title {
        font-size: 1.8rem;
      }
    }
  }
`;

const Card = (props: Props) => {
  return (
    <>
      {dummy.map((v) => (
        <Wrapper key={v.id}>
          <div className="card-inner">
            <div className="card-image">
              <div className="card-button">
                {`RELEASES - ${v.release}`}
                {/* Release -
                {v.release} */}
                {/* <div className="date">{v.release}</div> */}
              </div>

              <img src={v.image} alt="content" />
            </div>
            <a className="title">{v.title}</a>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default Card;
