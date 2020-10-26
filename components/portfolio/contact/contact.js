// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../../container.js";
// Assets
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <Container>
      <div className={styles.contactContainer} id="contact">
        <Fade bottom cascade>
          <div className="sectionTitle">contact.</div>
          <div className={styles.contain}>
            <div className={styles.text}>
              <a href="mailto:atienza.new@gmail.com">
                <button className={styles.contact}>CONTACT ME</button>
              </a>
              <p>
                I'll be happy to talk about projects and network for future
                endeavours.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://github.com/shoshin-programmer" target="_blank">
                  <img src="/github.svg" className={styles.link} />
                </a>
                <a href="https://www.linkedin.com/in/arvin-mark-atienza-687851143/" target="_blank">
                  <img src="/linkedin.svg" className={styles.link} />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
}
