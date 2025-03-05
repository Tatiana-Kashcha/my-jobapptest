import { useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { parseQueryString } from "../../utils/parseQueryString";

import decorations from "../../icons/decorations.svg";
import { CandidatesListItems } from "../CandidatesListItems/CandidatesListItems";
import { candidatesArr } from "../../data/candidatesArr";
import styles from "./CandidatesList.module.css";

type CandidateItems = {
  name: string;
  avatar: string;
  price: string;
  category: string;
  experience: string;
  englishLevel: string;
  skills: string[];
  description: string;
};

export const CandidatesList = () => {
  const [searchCandidateArr, setSearchCandidateArr] = useState<
    CandidateItems[]
  >([]);
  const location = useLocation();

  const queryParams = useMemo(() => {
    return parseQueryString(location.search) as Record<string, string[]>;
  }, [location.search]);

  const querySearchPosition = queryParams.search?.[0] || "";
  const queryCategoryArr = queryParams.category || [];
  const querySkillsArray = queryParams.skills || [];
  const querySalaryArr = queryParams.salary || [];

  const searchCandidate = () => {
    const searchNormalised = querySearchPosition?.toLowerCase();
    return candidatesArr.filter((candidate) => {
      const candidatePosition = candidate.name
        ?.toLowerCase()
        .includes(searchNormalised);
      const candidateCategory = queryCategoryArr?.length
        ? queryCategoryArr.some(
            (queryCategory) => candidate.category === queryCategory
          )
        : true;
      const candidateSalary = querySalaryArr?.length
        ? querySalaryArr.some((querySalary) => candidate.price === querySalary)
        : true;
      const candidateSkills = querySkillsArray?.length
        ? querySkillsArray.some((querySkills) =>
            candidate.skills.some((skill) => skill === querySkills)
          )
        : true;

      return (
        candidatePosition &&
        candidateCategory &&
        candidateSalary &&
        candidateSkills
      );
    });
  };

  useEffect(() => {
    const searchArr = searchCandidate();
    setSearchCandidateArr(searchArr);
  }, [queryParams]);

  return (
    <div className={styles.candidates_div}>
      <div className={styles.candidates_div_title}>
        <h1 className={styles.title}>
          Candidates <img src={decorations} alt="decorations text" />
        </h1>
        <p className={styles.quantyti}>{searchCandidateArr.length}</p>
      </div>
      <ul className={styles.list}>
        {searchCandidateArr.map((item: CandidateItems, idx: number) => (
          <li key={idx}>
            <CandidatesListItems
              candidate={item}
              querySkillsArray={querySkillsArray}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
