import { get } from './apiClient';

const endpoint = '/categories';

export async function fetchCategories() {
    return get(endpoint);
}

export async function getCategoryById(categoryId) {
    return get(`${endpoint}?categoryId=${categoryId}`);
}