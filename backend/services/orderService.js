import * as orderRepo from '../repositories/orderRepository.js';
import { getProductById } from './productService.js';
import generateOrderNumber from '../utils/generateOrderNumber.js';
import { calculateTotal } from '../utils/orderValidation.js';
import { validateQuantity } from '../utils/orderValidation.js';

export async function createOrder(orderData) {
    try {
        if (!orderData || !orderData.items || orderData.items.length === 0) {
            const error = new Error('Invalid order data');
            error.statusCode = 400;
            throw error;
        }
        const items = await Promise.all(
            orderData.items.map(async (item) => {
                const product = await getProductById(item.productId);

                return {
                    ...product.toObject(),
                    imageUrl: item.imageUrl,
                    quantity: validateQuantity(item.quantity)
                }
            }));
        orderData.orderNumber = generateOrderNumber();
        orderData.total = calculateTotal(items, orderData.deliveryType);
        await orderRepo.createOrder(orderData);
        orderData.items = items;
        return orderData;
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