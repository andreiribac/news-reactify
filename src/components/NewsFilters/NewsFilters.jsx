import styles from './styles.module.scss'
import { useFetch } from '../../helpers/hooks/useFetch';
import { getCategories } from '../../api/apiNews';
import SelectCatagory from '../SelectCatagory/SelectCatagory';
import Search from '../Search/Search';


const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.newsFilters}>
      {dataCategories ? (
        <SelectCatagory
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
