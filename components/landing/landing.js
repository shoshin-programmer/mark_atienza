// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../container.js";
// Assets
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <Container>
      <div className={styles.aboutContainer} id="about">
        <Fade bottom cascade>
          <div className={styles.header}>mark atienza.</div>
          <div className={styles.contain}>
            <div className={styles.content}>
              <p className={styles.subtitle}>[ fullstack developer ]</p>
              <p className={styles.text}>
                I am a fullstack developer based on Taguig City Philippines. I
                create beautiful websites, efficient internal systems and other
                things web.
              </p>
              <a href="mailto:atienza.new@gmail.com">
                <button className={styles.contact}>CONTACT ME</button>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
}
