// Dependencies
import Fade from "react-reveal/Fade";
// Components
import Container from "../container.js";
// Assets
import styles from "./project.module.css";

export default function Project() {
  return (
    <div className={styles.projectContainer} id="projects">
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Latest Work.</p>
          <div className={styles.showcaseWrap}>
            <Fade bottom cascade>
              <a href="https://github.com/shoshin-programmer/blog_v1" target="_blank">
                <img src="/former_portfolio.png" className={styles.showcase} />
              </a>
            </Fade>
          </div>
          <Fade bottom cascade>
            <div className={styles.textWrap}>
              <p className={styles.text}>
                Former Portfolio with blog, created using ReactJs, Django,
                Django Rest Framework.
              </p>
            </div>
          </Fade>
        </div>
        <a href="https://github.com/shoshin-programmer" target="_blank">
          <button className={styles.github}>View More on Github</button>
        </a>
      </div>
    </div>
  );
}
