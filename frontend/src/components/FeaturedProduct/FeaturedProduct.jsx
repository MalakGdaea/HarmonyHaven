import styles from './FeaturedProduct.module.css';
import { motion } from 'framer-motion';
import { fadeUp } from '../../motions';
import { icons } from '../../assets';

function FeaturedProduct({ product }) {

    return (
        <motion.div className={styles.featuredProductContainer}
            variants={fadeUp}>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <span className={styles.productPrice}>${Number(product.price).toFixed(2)}</span><br />
            <div className={styles.action}>
                <span>Buy Now</span>
                <img className={styles.arrow} src={icons.arrow} />
            </div>
            <p className={styles.productDescription}>{product.description}</p>
        </motion.div >
    );
}

export default FeaturedProduct;