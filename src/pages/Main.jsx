import { useEffect, useState } from "react";
import s from "./styles.module.css";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import { getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className={s.mainPage}>
      {news.length > 0 && <NewsBanner item={news[0]} />}
      <NewsList news={news} />
    </div>
  );
};

export default Main;
