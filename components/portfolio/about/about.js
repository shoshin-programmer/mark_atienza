// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../../container.js";
// Assets
import styles from "./about.module.css";

export default function About() {
  return (
    <Container>
      <div className={styles.aboutContainer}>
          <div className="sectionTitle" id="about">
            about.
          </div>
          <div className={styles.contain}>
            <div className={styles.text}>
              Hello! I'm Arvin Mark Atienza!
              <br />
              <br />
              I'm fullstack developer based on Taguig City Philippines. I create
              beautiful websites for professionals, efficient websites for
              internal systems, and other things on the web.
              {/* My goal is to make
              beautiful and websites that are user-centered that provides
              efficient and delightful experiences for the users. */}
            </div>
          </div>
      </div>
    </Container>
  );
}
