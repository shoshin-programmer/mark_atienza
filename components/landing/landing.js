// Components
import Container from "../container.js";
// Assets
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <Container>
      <div className={styles.left}>
        <span className={styles.title}>Mark</span>
        <br />
        <span className={styles.title}>Atienza</span>
        <br />
        <span className={styles.subtitle}>Fullstack web developer</span>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.right}>
          <p className={styles.semititle}>
            I develop beautiful
            <br />
            websites.
          </p>
        </div>
      </div>
    </Container>
  );
}
