import Category from '../models/Category.js';

export async function getAllCategories() {
    try {
        return await Category.find();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

