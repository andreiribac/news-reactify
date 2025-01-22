import { getCategories, getNews } from "../api/apiNews";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import NewsList from "../components/NewsList/NewsList";
import Pagination from "../components/Pagination/Pagination";
import SelectCatagory from "../components/SelectCatagory/SelectCatagory";
import Search from "../components/Search/Search";
import { useDebounce } from "../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from '../constants/constants';
import { useFetch } from "../helpers/hooks/useFetch";
import { useFilters } from "../helpers/hooks/useFilters";
import s from "./styles.module.scss";


const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });
  console.log('filters: ', filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });
  
  const { data: dataCategories } = useFetch(getCategories);
  console.log("filters.page_number", filters.page_number);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  }
  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number + 1);
    }
  }
  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <div className={s.mainPage}>
      {dataCategories ? (
        <SelectCatagory
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
      <NewsList isLoading={isLoading} news={data?.news} />
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </div>
  );
};

export default Main;
