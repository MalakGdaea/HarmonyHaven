import { get } from './apiClient';

const endpoint = '/products';

export async function fetchProducts() {
    return get(endpoint);
}

export async function fetchProductById(productId) {
    return get(`${endpoint}/${productId}`);
}

export async function getProductsByCategory(categoryId, limit = 6) {
    return get(`${endpoint}?categoryId=${categoryId}&limit=${limit}`);
}