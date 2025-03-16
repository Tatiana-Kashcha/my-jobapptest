import { SpinIcon } from "../../icons/SpinIcon";
import styles from "./SpinIconComponent.module.css";

export function SpinIconComponent() {
  return (
    <div className={styles.divLoading}>
      <SpinIcon />
    </div>
  );
}
