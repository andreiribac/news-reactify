import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannersList from "../BannersList/BannersList";
import styles from './styles.module.scss'

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);
  
  return (
    <section className={styles.latestNews}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
