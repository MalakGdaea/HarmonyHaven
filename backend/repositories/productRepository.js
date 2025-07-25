import Product from '../models/Product.js';

export async function getProducts({ limit, ...filter } = {}) {
    try {
        let query = Product.find(filter);

        if (limit) {
            query = query.limit(parseInt(limit));
        }

        return await query.exec();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductById(productId) {
    try {
        return await Product.findById(productId);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
}

