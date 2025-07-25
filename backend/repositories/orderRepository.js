import Order from '../models/Order.js';

export async function createOrder(orderData) {
    try {
        const order = new Order(orderData);
        return await order.save();
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
}

export async function getOrderById(orderId) {
    try {
        return await Order.findById(orderId).populate('items.product');
    } catch (error) {
        console.error('Error fetching order by ID:', error);
        throw error;
    }
}