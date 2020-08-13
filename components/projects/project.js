// Components
import Container from "../container.js";
// Assets
import styles from "./project.module.css";

export default function Project() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.bgImgWrap}>
        <img src="/work_bg.png" className={styles.bgImg} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p className={styles.title}>Latest Work</p>
          <div className={styles.showcaseWrap}>
            <img src="/former_portfolio.png" className={styles.showcase} />
          </div>
          <div className={styles.textWrap}>
            <p className={styles.text}>
              Former Portfolio with blog, created using ReactJs, Django, Django
              Rest Framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
