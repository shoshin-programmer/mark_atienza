// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../container.js";
// Assets
import styles from "./work.module.css";

export default function Work() {
  return (
    <Container>
      <div className={styles.workContainer} id="work">
        <Fade bottom cascade>
          <div className={styles.header}>work.</div>
          <div className={styles.contain}>
            <div className={styles.mainText}>
              RingCentral
              <br />
              <div className={styles.text}>[ Python Developer ]</div>
              <br />
              <div className={styles.description}>
                Internal HR system using Python, Django, React. Designing and
                deploying for users.
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
}
