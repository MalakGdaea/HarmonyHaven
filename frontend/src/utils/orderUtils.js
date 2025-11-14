import { v4 as uuidv4 } from 'uuid';

function buildOrder(customerData, orderData) {
    let totalAmount = orderData.total;
    if (customerData.deliveryType === 'express') {
        totalAmount += 15;
    }

    const orderPayload = {
        orderNumber: uuidv4(),
        customer: {
            name: customerData.fullName,
            email: customerData.email,
            phone: customerData.phone,
            address: {
                street: customerData.street,
                city: customerData.city,
                zipCode: customerData.zip
            }
        },
        items: orderData.items.map(item => ({
            productId: item._id,
            imageUrl: item.imageUrl,
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        deliveryType: customerData.deliveryType,
        totalAmount,
        createdAt: new Date()
    };

    return orderPayload;
}

export { buildOrder };