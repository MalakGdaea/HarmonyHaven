function generateOrderNumber() {
    const timestamp = Date.now(); // unique based on time
    const random = Math.floor(1000 + Math.random() * 9000); // random 4 digits
    return `ORD-${timestamp}-${random}`;
}

export default generateOrderNumber;