import { get, post } from './apiClient';

export async function fetchProducts() {
    return get('/products');
}

export async function fetchProductById(productId) {
    return get(`/products/${productId}`);
}