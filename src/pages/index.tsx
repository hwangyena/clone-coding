import type { NextPage } from "next";
import Head from "next/head";
import Contents from "src/components/card";
import styled from "@emotion/styled";
import React from "react";
import Logo from "src/components/logo";
import Header from "src/components/header";

const Wrapper = styled.div`
  nav {
    padding-top: 75px;
  }
  main {
    margin: 0 22px;
    /* padding: 0 12px; */
  }
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <nav>
        <button>FILFTER SEARCH</button>
      </nav>
      <main className="contents">
        <Contents />
        <div className="pagination" />
      </main>
      {/* <footer>
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
        <Logo width="100px"/>

        <div className="bottom">
          <span>2021 JACK LEMKUS - ALL RIGHTS RESERVED</span>
          <div className="sns">
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>FACEBOOK</span>
          </div>
        </div>
      </footer> */}
    </Wrapper>
  );
};

export default Home;
