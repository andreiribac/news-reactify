import styles from "./styles.module.scss";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <label className={styles.search__label}>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className={styles.search__input}
          placeholder="Search"
        />
      </label>
    </div>
  );
};

export default Search;
