import * as categoryService from '../services/categoryService.js';
import mongoose from 'mongoose';

export async function getCategories(req, res) {
    const { categoryId } = req.query;
    if (categoryId && !mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({ message: 'Invalid category ID' });
    }
    try {
        if (categoryId) {
            const category = await categoryService.getCategoryById(categoryId);
            if (!category) {
                return res.status(404).json({ message: 'Category Not Found' });
            }
            return res.status(200).json(category);
        }
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Categories' });
    }
}
