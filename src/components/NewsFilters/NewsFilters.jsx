import styles from './styles.module.scss'
import { useFetch } from '../../helpers/hooks/useFetch';
import { getCategories } from '../../api/apiNews';
import SelectCatagory from '../SelectCatagory/SelectCatagory';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';


const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.newsFilters}>
      {dataCategories ? (
        <Slider>
          <SelectCatagory
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => changeFilter("category", category)}
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
