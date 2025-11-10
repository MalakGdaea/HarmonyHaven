import Category from '../models/Category.js';

export async function getAllCategories() {
    try {
        return await Category.find();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

export async function getCategoryById(categoryId) {
    try {
        return await Category.findById(categoryId);
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        throw error;
    }
}
