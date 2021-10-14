import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import React from "react";
import Head from "next/head";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700;900&display=swap");
  /* 
  font-family: 'Bebas Neue', cursive;
font-family: 'Open Sans', sans-serif;
font-family: 'Merriweather', serif;
*/
  :root {
    --bg: #191919;
    --white: #f6f6f6;
    --gap: 1.5rem;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: #191919;
    color: #fff;
    font-size: 2.7vw;
  }
  body {
    margin: 0 var(--gap);
  }
  * {
    box-sizing: border-box;
  }
  span {
    display: inline-block;
  }
  ::-webkit-scrollbar {
    webkit-appearance: none;
    width: 0;
  }
  @media (min-width: 580px) {
    html,
    body {
      font-size: 1.5vw;
    }
  }
  @media (min-width: 1024px) {
    html,
    body {
      font-size: 1vw;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
