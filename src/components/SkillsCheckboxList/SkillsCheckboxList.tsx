import styles from "./SkillsCheckboxList.module.css";

type Skills = {
  id: string;
  name: string;
};

type SkillsCheckboxListProps = {
  searchSkillsArr: Skills[];
  handleCheckboxChange: Function;
  querySkillsArray: string[];
};

export const SkillsCheckboxList = ({
  searchSkillsArr,
  handleCheckboxChange,
  querySkillsArray,
}: SkillsCheckboxListProps) => {
  return (
    <ul className={styles.list}>
      {searchSkillsArr.map((item: Skills) => (
        <li key={item.id}>
          <input
            type="checkbox"
            id={`check-${item.id}`}
            className={styles.checkbox}
            defaultChecked={querySkillsArray?.includes(item.name)}
            onClick={() => handleCheckboxChange(item.name)}
          />
          <label htmlFor={`check-${item.id}`} className={styles.label}>
            <div className={styles.label_box}>
              <p>{item.name}</p>
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
};
