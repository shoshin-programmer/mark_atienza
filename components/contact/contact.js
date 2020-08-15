// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../container.js";
// Assets
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <Container>
      <div className={styles.contactContainer} id="contact">
        <Fade bottom cascade>
          <div className={styles.header}>contact.</div>
          <div className={styles.contain}>
            <div className={styles.text}>
              <a href="mailto:atienza.new@gmail.com">
                <button className={styles.contact}>CONTACT ME</button>
              </a>
              <p>
                I'll be happy to talk about projects and network for future
                endeavours.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
}
