import Head from "next/head";
import Navbar from "../components/navbar";
import React from "react";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Project Aurora | Welcome.</title>
      </Head>
      <Navbar />
    </>
  );
};

export default Index;
