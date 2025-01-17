/* eslint-disable react/prop-types */
import s from "./styles.module.scss";

const SelectCatagory = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className={s.categories}>
      <div className={s.categories__wrapper}>
        <div className={s.categories__row}>
          {categories.map((catagory) => {
            return (
              <button
                key={catagory}
                onClick={() => setSelectedCategory(catagory)}
                className={`${s.categories__item} ${
                  selectedCategory === catagory && s.active
                }`}
              >
                {catagory}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectCatagory;
