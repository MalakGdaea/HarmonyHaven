import * as categoryRepo from '../repositories/categoryRepository.js';

export async function getAllCategories() {
    try {
        return await categoryRepo.getAllCategories();
    } catch (error) {
        throw error;
    }
}