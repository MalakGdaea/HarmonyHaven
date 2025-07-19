import styles from './SubNavBar.module.css';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { appear } from '../../motions';

function SubNavBar() {
    return (
        <nav className={styles.subNavBar}>
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={appear}
                transition={{ duration: 0.5, delay: 2 }}
                className={styles.navList}>
                <li><NavLink className={styles.link} >Pianos</NavLink></li>
                <li><NavLink className={styles.link} >Guitars</NavLink></li>
                <li><NavLink className={styles.link} >Drums</NavLink></li>
                <li><NavLink className={styles.link} >Keyboards</NavLink></li>
                <li><NavLink className={styles.link}>Saxophones</NavLink></li>
                <li><NavLink className={styles.link} >Trumpets</NavLink></li>
            </motion.ul>
        </nav>
    );
}

export default SubNavBar;


