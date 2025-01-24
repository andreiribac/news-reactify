/* eslint-disable react/prop-types */
import styles from './styles.module.scss'

const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }) => {
  let isBanner = type === "banner";
  let styleClass = isBanner ? styles.banner : styles.item;

	return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
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
