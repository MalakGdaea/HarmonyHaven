import styles from './SubNavBar.module.css';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { appear } from '../../motions';

function SubNavBar({ categories }) {
    return (
        <nav className={styles.subNavBar}>
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={appear}
                transition={{ duration: 0.5, delay: 2 }}
                className={styles.navList}>
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
            </motion.ul>
        </nav>
    );
}

export default SubNavBar;


