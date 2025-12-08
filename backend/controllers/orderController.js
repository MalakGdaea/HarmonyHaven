import * as orderService from '../services/orderService.js';
import { sendOrderEmail } from '../utils/emailSender.js';

export async function createOrder(req, res) {
    try {
        const orderData = req.body;
        const newOrder = await orderService.createOrder(orderData);
        try {
            await sendOrderEmail(newOrder);
            res.json({ success: true, message: "Order confirmed and email sent!" });
        } catch (error) {
            console.error("Email error:", error);
            res.status(500).json({ error: "Failed to send email" });
        }
    } catch (error) {
        const status = error.statusCode || 500;
        console.error("Email error:", error);
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