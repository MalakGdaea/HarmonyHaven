import * as categoryRepo from '../repositories/categoryRepository.js';

export async function getAllCategories() {
    try {
        return await categoryRepo.getAllCategories();
    } catch (error) {
        throw error;
    }
}

export async function getCategoryById(categoryId) {
    try {
        return await categoryRepo.getCategoryById(categoryId);
    } catch (error) {
        throw error;
    }
}