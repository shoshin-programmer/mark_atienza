// Components
import Container from "../container.js";
// Assets
import styles from "./work.module.css";

export default function Work() {
  return (
    <Container>
      <div className={styles.aboutContainer}>
        <div className={styles.header}>about.</div>
        <div className={styles.contain}>
          <div className={styles.text}>
            I create minimalist websites that is focused for the users.
          </div>
        </div>
      </div>
    </Container>
  );
}
