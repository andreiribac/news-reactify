import { formatDate } from "../../helpers/formatDate";
import s from "./styles.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <h1 className={s.header__title}>News Reactify</h1>
        <div className={s.header__dateBox}>{formatDate(new Date())}</div>
      </div>
    </header>
  );
};

export default Header;
