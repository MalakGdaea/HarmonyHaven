import * as orderService from '../services/orderService.js';

export async function createOrder(req, res) {
    try {
        const orderData = req.body;
        const newOrder = await orderService.createOrder(orderData);
        res.status(201).json(newOrder);
    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({ message: error.message || 'Internal Server Error' });
    }
}

export async function getOrderById(req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid order ID' });
    }
    try {
        const order = await orderService.getOrderById(id);
        res.status(200).json(order);
    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({ message: error.message || 'Internal Server Error' });
    }
}