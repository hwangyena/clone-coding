import type { NextPage } from "next";
import Contents from "src/components/contents";
import styled from "@emotion/styled";
import React from "react";
import Header from "src/components/header";
import Footer from "src/components/footer";

const Wrapper = styled.div``;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <Contents />
      <div className="pagination" />
      <Footer />
    </Wrapper>
  );
};

export default Home;
