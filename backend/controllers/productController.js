import mongoose from 'mongoose';
import * as productService from '../services/productService.js';

export async function getProducts(req, res) {
    try {
        const { categoryId, limit } = req.query;
        if (categoryId && !mongoose.Types.ObjectId.isValid(categoryId)) {
            return res.status(400).json({ message: 'Invalid category ID' });
        }
        const products = await productService.getProducts({
            categoryId,
            limit: limit ? parseInt(limit) : undefined,
        });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
}

export async function getProductById(req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }
    try {
        const product = await productService.getProductById(id);
        res.status(200).json(product);
    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({ message: error.message || 'Internal Server Error' });
    }
}
