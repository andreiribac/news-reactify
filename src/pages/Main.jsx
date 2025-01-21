import { useState } from "react";
import { getCategories, getNews } from "../api/apiNews";
import s from "./styles.module.scss";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import NewsList from "../components/NewsList/NewsList";
import Pagination from "../components/Pagination/Pagination";
import SelectCatagory from "../components/SelectCatagory/SelectCatagory";
import Search from "../components/Search/Search";
import { useDebounce } from "../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from '../constants/constants';
import { useFetch } from "../helpers/hooks/useFetch";

const Main = () => {
  const [filters, setFilters] = useState({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const changeFilter = (key, value) => {
    setFilters(prev => {
      return {...prev, [key]: value}
    })
  }

  // const [currentPage, setCurrentPage] = useState(1);
  // const [selectedCategory, setSelectedCategory] = useState('All');
  // const [keywords, setKeywords] = useState('');

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });
  
  const { data: dataCategories } = useFetch(getCategories);

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
        // TODO 23.11
        <SelectCatagory
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={setSelectedCategory}
        />
      ) : null}
      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />
      <Search keywords={filters.keywords} setKeywords={setKeywords} />
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
