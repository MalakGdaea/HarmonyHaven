import styles from './NavBar.module.css';
import { icons } from '../../assets/';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className={styles.navContainer}>
            <span className={styles.currency}>USD | ILS </span>
            <Link to='/'><img className={styles.logo} src={icons.logo} /></Link>
            <img className={styles.cart} src={icons.cartIcon} />
        </nav>
    );
}

export default NavBar;