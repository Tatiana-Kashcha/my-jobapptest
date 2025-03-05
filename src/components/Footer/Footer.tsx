import globe from "../../icons/globe.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.footer_top}>
          <p className={styles.logo}>Logo</p>
          <div className={styles.link_group}>
            <button className={styles.link} type="button">
              Terms
            </button>
            <button className={styles.link} type="button">
              Privacy
            </button>
            <button className={styles.link} type="button">
              Contact
            </button>
            <button
              className={`${styles.link} ${styles.language}`}
              type="button"
            >
              <img src={globe} alt="globe" className={styles.globe} />
              EN
            </button>
          </div>
        </section>
      </div>
      <p className={styles.footer_bottom}>@ 2023. All rights reserved.</p>
    </footer>
  );
};
