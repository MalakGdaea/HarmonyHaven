import styles from './SubNavBar.module.css';
import { NavLink } from 'react-router-dom';

function SubNavBar({ categories }) {
    return (
        <nav className={styles.subNavBar}>
            <div className={styles.navList}>
                {categories && categories.map((category) => (
                    <li key={category._id}>
                        <NavLink
                            to={`/${category._id}`}
                            className={styles.link}
                        >
                            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                        </NavLink>
                    </li>
                ))}
            </div>
        </nav>
    );
}

export default SubNavBar;


