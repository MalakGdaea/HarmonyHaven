import styles from './Title.module.css';
import { motion } from 'framer-motion';

function Title({ text }) {
    return (
        <motion.h1 className={styles.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
        >{text}</motion.h1>
    );
}

export default Title;