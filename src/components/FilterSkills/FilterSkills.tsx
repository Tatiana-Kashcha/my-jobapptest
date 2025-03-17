import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "qs";
import { parseQueryString } from "../../utils/parseQueryString";
import { SkillsCheckboxList } from "../SkillsCheckboxList/SkillsCheckboxList";

import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import { SpinIconComponent } from "../SpinIconsComponent/SpinIconComponent";
import styles from "./FilterSkills.module.css";

type Skills = {
  id: string;
  name: string;
};

export const FilterSkills = () => {
  const [skillsArr, setSkillsArr] = useState<Skills[]>([]);

  const getSkillsAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "skills"));
      const allSkills = querySnapshot.docs.map((skill) => ({
        id: skill.id,
        name: skill.data().name as string,
      }));

      setSkillsArr(allSkills);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSkillsAll();
  }, []);

  const [inputValueSearch, setInputValueSearch] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = parseQueryString(location.search) as Record<
    string,
    string[]
  >;
  const querySkillsArray = queryParams?.skills;
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    querySkillsArray || []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueSearch(e.target.value);
  };

  const searchSkills = () => {
    const normalised = inputValueSearch.toLowerCase();
    return skillsArr
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((skill) => skill.name.toLowerCase().includes(normalised));
  };

  const searchSkillsArr = searchSkills();

  const handleCheckboxChange = (skillsName: string) => {
    let updatedSkillsArr;

    if (selectedSkills.includes(skillsName)) {
      updatedSkillsArr = selectedSkills.filter((item) => item !== skillsName);
    } else {
      updatedSkillsArr = [...selectedSkills, skillsName];
    }
    setSelectedSkills(updatedSkillsArr);

    const updatedQueryParams = {
      ...queryParams,
      skills: updatedSkillsArr,
    };

    const queryString = qs.stringify(updatedQueryParams, {
      arrayFormat: "comma",
      encode: false,
      commaRoundTrip: true,
    });
    navigate(`?${queryString}`);
  };

  return (
    <div>
      <h2 className={styles.title}>Skills</h2>
      <input
        type="text"
        name="search-skills"
        placeholder="Search"
        className={styles.search_skills}
        value={inputValueSearch}
        onChange={handleInputChange}
      />
      {skillsArr.length ? (
        <SkillsCheckboxList
          searchSkillsArr={searchSkillsArr}
          handleCheckboxChange={handleCheckboxChange}
          querySkillsArray={querySkillsArray}
        />
      ) : (
        <div className={styles.divLoading}>
          <SpinIconComponent />
          <p className={styles.pLoading}>Loading data...</p>
        </div>
      )}
    </div>
  );
};
