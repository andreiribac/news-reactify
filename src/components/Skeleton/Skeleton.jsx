/* eslint-disable react/prop-types */
import s from './styles.module.scss'

const Skeleton = ({ count = 1, type = 'banner' }) => {
  let isBanner = type === "banner";
  let styleClass = isBanner ? s.banner : s.item;

	return (
    <>
      {count > 1 ? (
        <ul className={s.list}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={styleClass}></li>
          ))}
        </ul>
      ) : (
        <div className={styleClass}></div>
      )}
    </>
  );
};

export default Skeleton;
