// Dependencies
import React, { Component } from "react";
import Head from "next/head";

// Components
import Background from "../components/background/bg.js";
import Content from "../components/content.js";
import Landing from "../components/landing/landing.js";
import About from "../components/about/about.js";
import Work from "../components/work/work.js";

// Assets

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Mark Atienza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <Content>
        <Landing />
        <About />
        <Work />
      </Content>
    </React.Fragment>
  );
}
