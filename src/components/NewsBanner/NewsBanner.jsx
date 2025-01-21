/* eslint-disable react/prop-types */
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import Image from "../Image/Image";
import s from "./styles.module.scss";

const NewsBanner = ({ item }) => {
  return (
    <div className={s.NewsBanner}>
      <header className={s.NewsBanner__header}>
        <Image image={item?.image} />
        <h3 className={s.NewsBanner__title}>{item.title}</h3>
        <div className={s.NewsBanner__published}>
          {formatTimeAgo(item.published)} by {item.author}
        </div>
      </header>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
