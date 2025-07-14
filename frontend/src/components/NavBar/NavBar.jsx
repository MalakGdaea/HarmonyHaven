import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { icons } from '../../assets/';

function NavBar() {
    return (
        <nav className={styles.navContainer}>
            <span className={styles.logo}>Harmony Haven</span>
            <ul className={styles.navList}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <img className={styles.cart} src={icons.cartIcon} />
        </nav>
    );
}

export default NavBar;