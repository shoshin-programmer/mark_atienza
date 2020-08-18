// Dependencies
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
// Components
import Container from "../container.js";
// Assets
import styles from "./header.module.css";

export default function Header() {
  const [visible, setVisibility] = React.useState(true);
  const [prevScrollpos, setPrevScrollpos] = React.useState(
    typeof window !== "undefined" ? window.pageYOffset : ""
  );

  const handleScroll = () => {
    const prevScrollPosition = prevScrollpos;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPosition > currentScrollPos;

    setPrevScrollpos(currentScrollPos);
    setVisibility(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.headerWrapper}>
      <div className={`${visible ? styles.header : styles.scrolled}`}>
        <Fade cascade top delay={4000} duration={1300}>
          <ul className={styles.list}>
            <a href="#about">
              <li className={styles.listItem}>about.</li>
            </a>
            <a href="#work">
              <li className={styles.listItem}>work.</li>
            </a>
            <a href="#projects">
              <li className={styles.listItem}>projects.</li>
            </a>
            <a href="#contact">
              <li className={styles.listItem}>contact.</li>
            </a>
          </ul>
        </Fade>
      </div>
    </div>
  );
}
