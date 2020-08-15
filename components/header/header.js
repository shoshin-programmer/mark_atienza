import React, { useEffect } from "react";
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
    const prevScrollposition = prevScrollpos;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollposition > currentScrollPos;

    setPrevScrollpos(currentScrollPos);
    setVisibility(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={`${styles.headerWrapper} ${visible ? "" : styles.scrolled}`}
    >
      <div className={styles.header}>
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
      </div>
    </div>
  );
}
