import * as productRepo from '../repositories/productRepository.js';

export async function getProducts({ categoryId, limit } = {}) {
    const filter = {};
    if (categoryId) {
        filter.category = categoryId;
    }
    if (limit) {
        filter.limit = limit;
    }
    try {
        return await productRepo.getProducts(filter);
    } catch (error) {
        throw error;
    }
}

export async function getProductById(productId) {
    try {
        const product = await productRepo.getProductById(productId);
        if (!product) {
            const error = new Error('Product not found');
            error.statusCode = 404;
            throw error;
        }
        return product;
    } catch (error) {
        throw error;
    }
}