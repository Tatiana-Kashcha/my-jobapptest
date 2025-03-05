import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.logo}>Logo</p>
        <div className={styles.buttons_group}>
          <div className={styles.nav}>
            <button className={styles.button_nav} type="button">
              Candidates
            </button>
            <button className={styles.button_nav} type="button">
              Jobs
            </button>
          </div>

          <button className={styles.button_sign_in} type="button">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};
