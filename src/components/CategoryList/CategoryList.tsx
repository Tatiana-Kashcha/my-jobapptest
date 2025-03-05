import { globalCategoryArr } from "../../data/globalCategoryArr";
import styles from "./CategoryList.module.css";

export const CategoryList = () => {
  return (
    <ul className={styles.list}>
      {globalCategoryArr.map((item: string, idx: number) => (
        <li key={idx} className={styles.list_items}>
          <button type="button" className={styles.button}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
