/* eslint-disable react/prop-types */
import s from "./styles.module.scss";

const Pagination = ({handleNextPage, handlePrevPage, handlePageClick, currentPage, totalPages }) => {
  return (
    <div className={s.pagination}>
      <button
        onClick={handlePrevPage}
        className={s.pagination__arrow}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <div className={s.pagination__row}>
        {[...Array(totalPages)].map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              className={`${s.pagination__item} ${
                currentPage === i + 1 && s.active
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNextPage}
        className={s.pagination__arrow}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
