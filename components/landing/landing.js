// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../container.js";
// Assets
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <Container>
      <div className={styles.left}>
        <Fade bottom cascade delay={4700}>
          <span className={styles.title}>Mark</span>
          <br />
          <span className={styles.title}>Atienza</span>
          <br />
          <span className={styles.subtitle}>Fullstack web developer</span>
        </Fade>
      </div>
      <div className={styles.rightContainer}>
        <Fade bottom cascade delay={5000}>
          <div className={styles.right}>
            <p className={styles.semititle}>
              I develop beautiful
              <br />
              websites.
            </p>
          </div>
        </Fade>
      </div>
    </Container>
  );
}
