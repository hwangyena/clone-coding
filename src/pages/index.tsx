import type { NextPage } from "next";
import Contents from "src/components/contents";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Header from "src/components/header";
import Footer from "src/components/footer";
import { useRouter } from "next/dist/client/router";
import { dummy } from "src/dummy";

const Wrapper = styled.div``;

const Home: NextPage = () => {
  const router = useRouter();
  const data = dummy;
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(1);

  useEffect(() => {
    const { page } = router.query;

    setPageSize(Math.floor(data.length / 12) + 1);
    page && setCurrent(Number(page));
  }, [data, router]);

  return (
    <Wrapper>
      <Header />
      <Contents current={current} setCurrent={setCurrent} pageSize={pageSize} />
      <Footer />
    </Wrapper>
  );
};

export default Home;
