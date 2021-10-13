import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700;900&display=swap");
  /* 
  font-family: 'Bebas Neue', cursive;
font-family: 'Open Sans', sans-serif;
font-family: 'Merriweather', serif;
*/
  :root {
    --bg: #191919;
    --white: #fff;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
