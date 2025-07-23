import styles from './Category.module.css';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

function Category({ category }) {
    return (
        <div className={styles.categoryContainer}>
            <Title text={category.name}></Title>
            <div className={styles.contentWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={category.image} alt={category.name} className={styles.categoryImage} /> {/* make the image dinamic */}
                    <p className={styles.description}>{category.description}</p>
                </div>
                <div className={styles.productsWrapper}>
                    {category.products?.slice(0, 3).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                {/* <Link to={category.link} className={styles.button}>
                    See More &gt;&gt;
                </Link> */}

            </div>
        </div>
    );
}

export default Category;
