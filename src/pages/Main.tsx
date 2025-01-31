import LatestNews from '../components/LatestNews/LatestNews';
import NewsByFilters from '../components/NewsByFilters/NewsByFilters';
import styles from "./styles.module.scss";


const Main = () => {

  return (
    <div className={styles.mainPage}>
      <LatestNews />
      <NewsByFilters/>
    </div>
  );
};

export default Main;
