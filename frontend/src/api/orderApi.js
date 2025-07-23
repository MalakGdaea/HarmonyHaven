import { get, post } from './apiClient';

export async function setOrder(orderData) {
    return post('/orders', orderData);
}