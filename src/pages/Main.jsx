import { getNews } from "../api/apiNews";
import { useDebounce } from "../helpers/hooks/useDebounce";
import { PAGE_SIZE } from '../constants/constants';
import { useFetch } from "../helpers/hooks/useFetch";
import { useFilters } from "../helpers/hooks/useFilters";
import LatestNews from '../components/LatestNews/LatestNews';
import NewsByFilters from '../components/NewsByFilters/NewsByFilters';
import styles from "./styles.module.scss";


const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  }); 

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });
 
// TODO 22:11
  return (
    <div className={styles.mainPage}>
      <LatestNews banners={data && data.news} isLoading={isLoading} />
      <NewsByFilters
        filters={filters}
        changeFilter={changeFilter}
        isLoading={isLoading}
        news={data?.news}
      />
    </div>
  );
};

export default Main;
