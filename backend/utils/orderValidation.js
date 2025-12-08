export const calculateTotal = (items, deliveryType) => {
    let total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (deliveryType === 'express') {
        total += 15;
    }
    return total;
}

export const validateQuantity = (quantity, productId) => {
    const num = Number(quantity);

    if (!Number.isInteger(num) || num <= 0) {
        const error = new Error(`Invalid quantity for product ${productId}`);
        error.statusCode = 400;
        throw error;
    }

    return num;
}

