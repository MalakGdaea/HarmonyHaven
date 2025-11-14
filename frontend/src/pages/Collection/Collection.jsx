import styles from './Collection.module.css';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../api/productApi';
import Instrument from '../../components/Instrument/Instrument.jsx';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../context/ProductsContext.jsx';


function Collection() {
    const { categoryId } = useParams();
    const { products, setProducts } = useProducts();

    useEffect(() => {
        const fetchData = async () => {
            if (products[categoryId]) {
                return;
            }
            try {
                const instruments = await getProductsByCategory(categoryId);
                setProducts(prevProducts => ({
                    ...prevProducts,
                    [categoryId]: instruments
                }));
            } catch (error) {
                console.error('Error fetching products by category:', error);
            }
        }
        fetchData();
    }, [categoryId]);

    return (
        <div className={styles.instrumentsGrid}>
            {products[categoryId] ? products[categoryId].map((instrument) => (
                <Instrument key={instrument._id} item={instrument} />
            )) : <p>Loading...</p>}
        </div>
    );
}

export default React.memo(Collection);
