import styles from './SubNavBar.module.css';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

function SubNavBar() {
    return (
        <motion.nav className={styles.subNavBar}
            initial={{ height: "100%", opacity: 1 }}
            animate={{ height: "auto", opacity: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}>
            <ul className={styles.navList}>
                <li><NavLink to="#home">Pianos</NavLink></li>
                <li><NavLink to="#about">Guitars</NavLink></li>
                <li><NavLink to="#services">Drums</NavLink></li>
                <li><NavLink to="#contact">Keyboards</NavLink></li>
                <li><NavLink to="#contact">Saxophones</NavLink></li>
                <li><NavLink to="#contact">Trumpets</NavLink></li>
            </ul>
        </motion.nav>
    );
}

export default SubNavBar;


