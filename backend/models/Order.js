import mongoose from "mongoose";

const orderShema = new mongoose.Schema({
    orderNumber: { type: String, unique: true, required: true },
    customer: {
        name: { type: String, required: true },
        email: { type: String, required: true, },
        address: {
            street: String,
            city: String,
            zipCode: String,
        },
        phone: String,
    },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    deliveryType: {
        type: String,
        enum: ['standard', 'express'],
        default: 'standard',
        required: true
    },
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderShema);
export default Order;