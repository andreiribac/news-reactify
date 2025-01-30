import { forwardRef } from "react";
import styles from "./styles.module.scss";

const SelectCatagory = forwardRef(
  ({ categories, selectedCategory, setSelectedCategory }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
        <div className={styles.categories__row}>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`${styles.categories__item} ${
              !selectedCategory && styles.active
            }`}
          >
            All
          </button>
          {categories.map((catagory) => {
            return (
              <button
                key={catagory}
                onClick={() => setSelectedCategory(catagory)}
                className={`${styles.categories__item} ${
                  selectedCategory === catagory && styles.active
                }`}
              >
                {catagory}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

SelectCatagory.displayName = "SelectCatagory";

export default SelectCatagory;
