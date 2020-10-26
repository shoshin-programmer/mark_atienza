// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../../container.js";
// Assets
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <Container>
      <div className={styles.container}>
        <Fade bottom cascade delay={5000}>
          <div className={styles.header}><p>mark atienza.</p></div>
          <div className={styles.contain}>
            <div className={styles.content}>
              <Fade bottom cascade delay={5300}>
                <p className={styles.subtitle}>fullstack developer</p>
                <div className={styles.text}>
                <p>
                  I am a fullstack developer based on Taguig City Philippines. I
                  create beautiful websites, efficient internal systems and
                  other things web.
                </p>
                </div>
              </Fade>
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
