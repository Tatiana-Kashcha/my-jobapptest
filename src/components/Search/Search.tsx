import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "qs";
import { parseQueryString } from "../../utils/parseQueryString";
import styles from "./Search.module.css";
import iconSearch from "../../icons/icon search.svg";

export const Search: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = parseQueryString(location.search) as Record<
    string,
    string[]
  >;
  const querySearch = queryParams?.search;
  const [inputValue, setInputValue] = useState<string[]>(querySearch || []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue([e.target.value]);

    if (e.target.value.trim() === "") {
      const updatedQueryParams = {
        ...queryParams,
        search: undefined,
      };

      const queryString = qs.stringify(updatedQueryParams, {
        arrayFormat: "comma",
        encode: false,
        commaRoundTrip: true,
      });
      navigate(`?${queryString}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let updatedQueryParams;
    if (inputValue[0]?.trim() === "") {
      updatedQueryParams = {
        ...queryParams,
        search: undefined,
      };
    } else {
      updatedQueryParams = {
        ...queryParams,
        search: inputValue,
      };
    }

    const queryString = qs.stringify(updatedQueryParams, {
      arrayFormat: "comma",
      encode: false,
      commaRoundTrip: true,
    });
    navigate(`?${queryString}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Search <img src={iconSearch} alt="icon search" />
      </button>
    </form>
  );
};
