import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// import { globalCategoryArr } from "../../data/globalCategoryArr";
import styles from "./CategoryList.module.css";

type CategoryItems = {
  id: string;
  name: string;
};

export const CategoryList = () => {
  const [globalCategory, setGlobalCategory] = useState<CategoryItems[]>([]);

  const getGlobalCategory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "global_category"));
      const allCategory = querySnapshot.docs.map((category) => ({
        id: category.id,
        name: category.data().name as string,
      }));

      setGlobalCategory(allCategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGlobalCategory();
  }, []);

  return globalCategory.length ? (
    <ul className={styles.list}>
      {globalCategory.map((item) => (
        <li key={item.id} className={styles.list_items}>
          <button type="button" className={styles.button}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <div className={styles.divLoading}>
      <p>Loading data...</p>
    </div>
  );

  // return (
  //   <ul className={styles.list}>
  //     {globalCategoryArr.map((item: string, idx: number) => (
  //       <li key={idx} className={styles.list_items}>
  //         <button type="button" className={styles.button}>
  //           {item}
  //         </button>
  //       </li>
  //     ))}
  //   </ul>
  // );
};
