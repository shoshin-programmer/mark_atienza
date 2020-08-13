import React, { useEffect } from "react";
// Components
import Container from "../container.js";
// Assets
import styles from "./header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  // let navbarClasses = ["navbar"];
  // if (scrolled) {
  //   navbarClasses.push("scrolled");
  // }

  return (
    <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`}>
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
        </ul>
      </div>
    </div>
  );
}
