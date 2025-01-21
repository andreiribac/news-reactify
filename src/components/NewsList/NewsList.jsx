/* eslint-disable react/prop-types */
import NewsItem from '../NewsItem/NewsItem';
import s from "./styles.module.scss";
import withSkeleton from '../../helpers/hocs/withSkeleton';

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

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
