import styles from "./CandidatesAdditionalInformation.module.css";
import iconArrow from "../../icons/arrow-right.svg";
import iconCheck from "../../icons/check.svg";
import { useState } from "react";

type CandidatesAdditionalInformationProps = {
  info: string;
};

export const CandidatesAdditionalInformation = ({
  info,
}: CandidatesAdditionalInformationProps) => {
  const [show, setShow] = useState(false);

  const showInfo = () => {
    setShow(!show);
  };

  return (
    <>
      {show && <p className={styles.info}>{info}</p>}
      <div className={styles.div_info}>
        <button type="button" className={styles.button_more} onClick={showInfo}>
          More
          <img src={iconArrow} alt="icon arrow" />
        </button>

        <div className={styles.test}>
          <div className={styles.test_check}>
            <img src={iconCheck} alt="icon check" />
          </div>
          <p className={styles.test_descr}>online test passed</p>
        </div>
      </div>
    </>
  );
};
