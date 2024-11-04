/* eslint-disable react/prop-types */
import NewsItem from '../NewsItem/NewsItem';
import s from "./styles.module.scss";

const NewsList = ({ news }) => {
  return (
    <ul className={s.newsList}>
      {news.map(item => {
        return (
          <NewsItem key={item.id} item={item} />
        );
      })}
    </ul>
  );
};

export default NewsList;
