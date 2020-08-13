// Components
import Container from "../container.js";
// Assets
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <Container>
      <div className={styles.contactContainer}>
        <div className={styles.contain}>
          <div className={styles.text}>
            <a href="mailto:atienza.new@gmail.com">
              <button className={styles.contact}>CONTACT ME</button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
