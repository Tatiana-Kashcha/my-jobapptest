import styles from "./CandidatesSkillsList.module.css";

type CandidatesSkillsListProps = {
  skillsArr: string[];
  querySkillsArray: string[];
};

export const CandidatesSkillsList = ({
  skillsArr,
  querySkillsArray,
}: CandidatesSkillsListProps) => {
  return (
    <ul className={styles.list}>
      {skillsArr.map((item: string, idx: number) => (
        <li key={idx} className={styles.list_items}>
          <p
            className={`${
              querySkillsArray?.includes(item) ? styles.skills : ""
            } `}
          >
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
};
