// Dependencies
import React, { Component, useEffect } from "react";
import Fade from "react-reveal/Fade";
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
import FullLoader from "../components/loaders/full_loader.js";

// Assets

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Mark Atienza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <FullLoader />
      ) : (
        <Fade>
          <Background />
          <Header />
          <Content>
            <Landing />
            <About />
            <Work />
            <Project />
            <Contact />
          </Content>
        </Fade>
      )}
    </React.Fragment>
  );
}
