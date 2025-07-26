import { get } from './apiClient';

const endpoint = '/categories';

export async function fetchCategories() {
    return get(endpoint);
}