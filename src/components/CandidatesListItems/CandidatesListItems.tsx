import { CandidatesSkillsList } from "../CandidatesSkillsList/CandidatesSkillsList";
import { CandidatesAdditionalInformation } from "../CandidatesAdditionalInformation/CandidatesAdditionalInformation";
import styles from "./CandidatesListItems.module.css";

type Candidate = {
  id: string;
  name: string;
  avatar: string;
  price: string;
  category: string;
  experience: string;
  englishLevel: string;
  skills: string[];
  description: string;
};

type CandidatesListItemsProps = {
  candidate: Candidate;
  querySkillsArray: string[];
};

export const CandidatesListItems = ({
  candidate,
  querySkillsArray,
}: CandidatesListItemsProps) => {
  return (
    <div className={styles.candidates_div}>
      <div className={styles.descriptions_div}>
        <div className={styles.thumb}>
          <img src={candidate.avatar} alt="photo" className={styles.photo} />
        </div>
        <div>
          <h3 className={styles.title}>{candidate.name}</h3>
          <div className={styles.descriptions}>
            <p>
              Category •{" "}
              <span className={styles.descriptions_span}>
                {candidate.category}
              </span>
            </p>
            <p>
              Experience •{" "}
              <span className={styles.descriptions_span}>
                {candidate.experience}
              </span>
            </p>
            <p>
              English •{" "}
              <span className={styles.descriptions_span}>
                {candidate.englishLevel}
              </span>
            </p>
          </div>
        </div>
        <p className={styles.salary}>{candidate.price}</p>
      </div>
      <CandidatesSkillsList
        skillsArr={candidate.skills}
        querySkillsArray={querySkillsArray}
      />
      <CandidatesAdditionalInformation info={candidate.description} />
    </div>
  );
};
