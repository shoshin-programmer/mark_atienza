// Dependencies
// Components
// Assets
import styles from "./loaders.module.css";

export default function FullLoader() {
  return (
    <div className={styles.fullPageWrap}>
      <div className={styles.fullPage}>
        <div className={styles.box}></div>
      </div>
    </div>
  );
}
