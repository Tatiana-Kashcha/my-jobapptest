import { useState, useEffect } from "react";

import { FilterButtonsList } from "../FilterButtonsList/FilterButtonsList";
import { FilterSkills } from "../FilterSkills/FilterSkills";
// import { salaryArr } from "../../data/salaryArr";
// import { filterCategoryArr } from "../../data/filterCategoryArr";

import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import styles from "./FilterBox.module.css";

type Buttons = {
  id: string;
  name: string;
};

export const FilterBox = () => {
  const [categoryAll, setCategoryAll] = useState<Buttons[]>([]);
  const [salaryAll, setSalaryAll] = useState<Buttons[]>([]);

  const getFilterCategory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "filter_category"));
      const allCategory = querySnapshot.docs.map((category) => ({
        id: category.id,
        name: category.data().name as string,
      }));

      const allCategorySort = allCategory?.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setCategoryAll(allCategorySort);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterSalary = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "salary"));
      const allSalary = querySnapshot.docs.map((salary) => ({
        id: salary.id,
        name: salary.data().name as string,
      }));

      const allSalarySort = allSalary?.sort((a, b) => a.id.localeCompare(b.id));

      setSalaryAll(allSalarySort);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterCategory();
    getFilterSalary();
  }, []);

  return (
    <div className={styles.box}>
      <FilterButtonsList title={"Category"} dataArr={categoryAll} />
      <FilterSkills />
      <FilterButtonsList title={"Salary"} dataArr={salaryAll} />
    </div>
  );
};
