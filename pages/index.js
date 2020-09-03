// Dependencies
import React from "react";
import Head from "next/head";

// Components
import Background from "../components/portfolio/background/bg.js";
import Content from "../components/content.js";
import Landing from "../components/portfolio/landing/landing.js";
import About from "../components/portfolio/about/about.js";
import Work from "../components/portfolio/work/work.js";
import Project from "../components/portfolio/projects/project.js";
import Contact from "../components/portfolio/contact/contact.js";
import Header from "../components/portfolio/header/header.js";
import FullLoader from "../components/portfolio/loaders/full_loader.js";

// Assets

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Mark Atienza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullLoader />
      <Content>
        <Background />
        <Header />
        <Landing />
        <About />
        <Work />
        <Project />
        <Contact />
      </Content>
    </React.Fragment>
  );
}
