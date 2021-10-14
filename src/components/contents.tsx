import React, { ChangeEvent, MouseEvent } from "react";
import styled from "@emotion/styled";
import { dummy } from "src/dummy";
import { SetState } from "src/types";
import Link from "next/link";
import cn from "classnames";

const MainWrapper = styled.main`
  .layout {
    display: grid;

    .item {
      padding: 0 0 16%;
      border-bottom: 1px solid var(--white);
      margin-top: 1.8rem;
      cursor: pointer;

      .image-section {
        position: relative;
        border: 1px solid var(--white);
        width: 100%;
        height: 100%;
        overflow: hidden;
        aspect-ratio: 515 / 654;

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* transform: scale(1); */
          transition: transform 1s ease-in-out;
        }
        .sub-title {
          position: absolute;
          top: 0.8em;
          right: 1em;
          font-family: "Merriweather", serif;
          background: #f6f6f6;
          border: 1px solid var(--bg);
          border-radius: 50px;
          color: var(--bg);
          padding: 2% 4%;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1.5rem;
        }
      }
      .title {
        margin: 2% 0 0;
        font-size: 2.5rem;
        font-family: "Bebas Neue", cursive;
        transition: color 0.2s ease-out;

        &:hover {
          color: var(--hover-color);
        }
      }
      .item-hover {
        &:hover {
          .image-section {
            .image {
              transform: scale(1.03);
            }
          }
        }
      }
    }
  }

  .page-position {
    font-family: "Bebas Neue", cursive;
    .page {
      border: 1px solid var(--white);
      border-radius: 50px;
      display: flex;
      gap: 1.5rem;
      a {
        background: none;
        color: var(--gray);
        font-family: "Merriweather", serif;
        text-decoration: none;
        border: 0;
        font-size: 1.6rem;
        cursor: pointer;
        transition: color 0.3s ease-out;
        &.current {
          color: var(--white);
        }
        &:not(.current):hover {
          color: var(--hover-color);
        }
      }
    }
  }

  @media (min-width: 580px) and (max-width: 1024px) {
    .layout {
      margin-top: 21px;
      gap: var(--gap);
      grid-template-columns: repeat(2, 1fr);
      .item {
        .item-hover > .image-section {
          aspect-ratio: 290 / 403;
          .suv-title {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .layout {
      margin-top: 1.5rem;
      gap: 1.8rem 1.3rem;
      grid-template-columns: repeat(4, 1fr);
      .item {
        margin-top: 0;
        .item-hover {
          .image-section > .sub-title {
            padding: 3% 8%;
            font-size: 1.1rem;
          }
          .title {
            font-size: 2em;
          }
        }
      }
    }
    .page-position {
      margin: 2rem 0 0;
      display: flex;
      justify-content: flex-end;
      .page {
        padding: 0.5rem 1.8rem;
      }
    }
  }
`;
interface Props {
  current: number;
  setCurrent: SetState<number>;
  pageSize: number;
}

const Contents = ({ current, setCurrent, pageSize }: Props) => {
  const currentPageData = dummy.slice(
    (current - 1) * 12,
    (current - 1) * 12 + 12
  );
  const page = Array.from({ length: pageSize }, (_, i) => i + 1);

  const onButton = (e: MouseEvent<HTMLElement>) => {
    const name = (e.target as HTMLInputElement).name;
    // const name = e.target.name;
    console.log(name);
  };

  return (
    <MainWrapper>
      <div className="layout">
        {currentPageData.map((v) => (
          <article className="item" key={v.id}>
            <div className="item-hover">
              <div className="image-section">
                <img src={v.image} alt="content" className="image" />
                <div className="sub-title">{`${v.subtitle} - ${v.release}`}</div>
              </div>
              <div className="title">
                <a>{v.title}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="page-position">
        <div className="page">
          {page.map((v) => (
            <Link key={v} href={{ query: { page: v } }} passHref>
              <a
                // name={String(v)}
                className={cn({ current: Number(v) === current })}
                // onClick={(e) => onButton(e)}
              >
                {v}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default Contents;
