import React from "react";
import styled from "@emotion/styled";
import { dummy } from "src/dummy";

interface Props {}

const Wrapper = styled.div`
  width: 100%;
  /* height: 440px; */
  margin-top: 20px;

  .card {
    padding-bottom: 42px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #fff;
    .card-image {
      position: relative;
      .card-button {
        position: absolute;
        top: 3%;
        right: 3%;
        padding: 6px 11px;
        background: #f6f6f6;
        border: 1px solid #191919;
        color: black;
        font-weight: 700;
        font-size: 0.7rem;
        /* display: flex; */
        /* justify-content: center; */
        border-radius: 30px;
      }
      img {
        width: 100%;
        aspect-ratio: 517 / 654;
        border: 1px solid #fff;
      }
    }
  }
`;

const Button = styled.div`
  position: relative;
  top: 20px;
  padding: 20px;
  background: #f6f6f6;
  border: 1px solid #191919;
`;

const Card = (props: Props) => {
  return (
    <>
      {dummy.map((v) => (
        <Wrapper key={v.id}>
          <div className="card">
            <div className="card-image">
              <span className="card-button">{`RELEASES ${v.release}`}</span>
              <img src={v.image} alt="content" />
            </div>
            <a>{v.title}</a>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default Card;
