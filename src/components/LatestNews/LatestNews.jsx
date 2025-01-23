import BannersList from "../BannersList/BannersList";
import styles from './styles.module.scss'

const LatestNews = ({banners, isLoading}) => {
  return (
    <section className={styles.latestNews}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
