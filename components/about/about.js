// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../container.js";
// Assets
import styles from "./about.module.css";

export default function About() {
  return (
    <Container>
      <div className={styles.aboutContainer} id="about">
        <Fade bottom cascade>
          <div className={styles.header}>about.</div>
          <div className={styles.contain}>
            <div className={styles.text}>
              I create minimalist websites that is focused for the users.
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
}
