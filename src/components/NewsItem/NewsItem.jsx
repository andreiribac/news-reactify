/* eslint-disable react/prop-types */
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import s from "./styles.module.css";

const NewsItem = ({ item }) => {
  return (
    <li className={s.NewsItem}>
      <div
        className={s.NewsItem__imgBox}
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <header className={s.NewsItem__header}>
        <h3 className={s.NewsItem__title}>{item.title}</h3>
        <div className={s.NewsItem__published}>
          {formatTimeAgo(item.published)} by {item.author}
        </div>
      </header>
    </li>
  );
};

export default NewsItem;
