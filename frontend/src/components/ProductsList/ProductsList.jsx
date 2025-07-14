import styles from './ProductsList.module.css';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct.jsx';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../motions';

function ProductsList({ products }) {
    return (
        <motion.div className={styles.productsListContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}>
            {products.map((product) => (
                <FeaturedProduct key={product.id} product={product} />
            ))}
        </motion.div>
    );
}

export default ProductsList;