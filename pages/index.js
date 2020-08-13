// Dependencies
import React, { Component } from "react";
import Head from "next/head";

// Components
import Background from "../components/background/bg.js";
import Content from "../components/content.js";
import Landing from "../components/landing/landing.js";
import About from "../components/about/about.js";
import Work from "../components/work/work.js";
import Project from "../components/projects/project.js";
import Contact from "../components/contact/contact.js";
import Header from "../components/header/header.js";

// Assets

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Mark Atienza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <Header />
      <Content>
        <Landing />
        <About />
        <Work />
        <Project />
        <Contact />
      </Content>
    </React.Fragment>
  );
}
