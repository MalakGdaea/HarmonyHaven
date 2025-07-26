import styles from './Category.module.css';
import Title from '../Title/Title';
import ProductCard from '../ProductCard/ProductCard';
import React, { useEffect } from 'react';
import { getProductsByCategory } from '../../api/productApi';

function Category({ category }) {
    const [products, setProducts] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await getProductsByCategory(category._id, 6);
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
                    <img src={category.imageUrl} alt={category.name} className={styles.categoryImage} /> {/* make the image dinamic */}
                    <p className={styles.description}>{category.description}</p>
                </div>
                <div className={styles.productsWrapper}>
                    {isLoading ? (
                        <p>Loading products...</p>
                    ) : products && products.length > 0 ? (
                        products.map(product => <ProductCard key={product.id} product={product} />)
                    ) : (
                        <p>No products available in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Category;
