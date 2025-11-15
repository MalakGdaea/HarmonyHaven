import styles from './Category.module.css';
import Title from '../Title/Title';
import ProductCard from '../ProductCard/ProductCard';
import React, { useEffect } from 'react';
import { getProductsByCategory } from '../../api/productApi';
import { Link } from 'react-router-dom';

function Category({ category }) {
    const [products, setProducts] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const PRODUCTS_PER_CATEGORY = 4;
                const response = await getProductsByCategory(category._id, PRODUCTS_PER_CATEGORY);
                setProducts(response);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div className={styles.categoryContainer}>
            <Title text={category.name}></Title>
            <div className={styles.contentWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={category.imageUrl} alt={category.name} className={styles.categoryImage} />
                    <div className={styles.moreInfo}>
                        <p className={styles.description}>{category.description}</p>
                        <Link to={`/${category._id}`} className={styles.more}>see more</Link>
                    </div>
                </div>
                <div className={styles.productsWrapper}>
                    {isLoading ? (
                        <p>Loading products...</p>
                    ) : products && products.length > 0 ? (
                        products.map(product => <ProductCard key={product._id} product={product} />)
                    ) : (
                        <p>No products available in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Category;
