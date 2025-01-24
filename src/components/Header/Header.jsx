import { formatDate } from "../../helpers/formatDate";
import styles from './styles.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__wrapper}>
				<h1 className={styles.header__title}>News Reactify</h1>
				<div className={styles.header__dateBox}>
					{formatDate(new Date())}
				</div>
			</div>
		</header>
	);
};

export default Header;
