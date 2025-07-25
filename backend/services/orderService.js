import * as orderRepo from '../repositories/orderRepository.js';
import generateOrderNumber from '../utils/generateOrderNumber.js';
export async function createOrder(orderData) {
    try {
        if (!orderData || !orderData.items || orderData.items.length === 0) {
            const error = new Error('Invalid order data');
            error.statusCode = 400;
            throw error;
        }
        orderData.orderNumber = generateOrderNumber();
        return await orderRepo.createOrder(orderData);
    } catch (error) {
        throw error;
    }
}

export async function getOrderById(orderId) {
    try {
        const order = await orderRepo.getOrderById(orderId);
        if (!order) {
            const error = new Error('Order not found');
            error.statusCode = 404;
            throw error;
        }
        return order;
    } catch (error) {
        throw error;
    }
}