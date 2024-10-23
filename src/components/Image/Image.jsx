/* eslint-disable react/prop-types */
import s from "./styles.module.css";

const Image = ({ image }) => {
  return (
    <div className={s.image}>
      {image ? <img src={image} className={s.image__img} alt="news" /> : null}
    </div>
  );
};

export default Image;
