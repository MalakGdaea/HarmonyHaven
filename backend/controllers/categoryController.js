import * as categoryService from '../services/categoryService.js';

export async function getAllCategories(req, res) {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Categories' });
    }
}
