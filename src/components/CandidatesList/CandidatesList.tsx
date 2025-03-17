import { useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { parseQueryString } from "../../utils/parseQueryString";

import decorations from "../../icons/decorations.svg";
import { CandidatesListItems } from "../CandidatesListItems/CandidatesListItems";

import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import { SpinIconComponent } from "../SpinIconsComponent/SpinIconComponent";
import styles from "./CandidatesList.module.css";

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

type CandidateItems = Omit<Candidate, "id">;

export const CandidatesList = () => {
  const [searchCandidateArr, setSearchCandidateArr] = useState<Candidate[]>([]);
  const [candidatesAll, setCandidatesAll] = useState<Candidate[]>([]);

  const location = useLocation();

  const getCandidatesAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "candidates"));
      const allCandidates = querySnapshot.docs.map((candidate) => ({
        id: candidate.id,
        ...(candidate.data() as CandidateItems),
      }));

      const allCandidatesSort = allCandidates?.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setCandidatesAll(allCandidatesSort);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCandidatesAll();
  }, []);

  const queryParams = useMemo(() => {
    return parseQueryString(location.search) as Record<string, string[]>;
  }, [location.search]);

  const querySearchPosition = queryParams.search?.[0] || "";
  const queryCategoryArr = queryParams.category || [];
  const querySkillsArray = queryParams.skills || [];
  const querySalaryArr = queryParams.salary || [];

  const searchCandidate = () => {
    const searchNormalised = querySearchPosition?.toLowerCase();
    return candidatesAll.filter((candidate) => {
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
    if (candidatesAll.length) {
      const searchArr = searchCandidate();
      setSearchCandidateArr(searchArr);
    }
  }, [queryParams, candidatesAll]);

  return (
    <div className={styles.candidates_div}>
      <div className={styles.candidates_div_title}>
        <h1 className={styles.title}>
          Candidates <img src={decorations} alt="decorations text" />
        </h1>
        {candidatesAll.length > 0 && (
          <p className={styles.quantyti}>{searchCandidateArr.length}</p>
        )}
      </div>
      {candidatesAll.length ? (
        <ul className={styles.list}>
          {searchCandidateArr.map((item) => (
            <li key={item.id}>
              <CandidatesListItems
                candidate={item}
                querySkillsArray={querySkillsArray}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.divLoading}>
          <SpinIconComponent />
          <p className={styles.pLoading}>Loading data...</p>
        </div>
      )}
    </div>
  );
};
