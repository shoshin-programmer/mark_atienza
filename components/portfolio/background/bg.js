// Dependencies

// Assets
import styles from "./bg.module.css";

export default function Background() {
  return (
    <div className={styles.container}>
      <img src="/first_bg.png" className={styles.firstBg} />
      <img src="/second_bg.png" className={styles.secondBg} />
    </div>
  );
}
