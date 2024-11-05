import { useEffect, useState } from "react";
import { getNews } from "../api/apiNews";
import s from "./styles.module.scss";
import NewsBanner from '../components/NewsBanner/NewsBanner';
import NewsList from "../components/NewsList/NewsList";
import Skeleton from "../components/Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isNewsReady = news.length > 0 && !isLoading;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className={s.mainPage}>
      {isNewsReady ? <NewsBanner item={news[0]} /> : <Skeleton />}
      {isNewsReady ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
    </div>
  );
};

export default Main;
