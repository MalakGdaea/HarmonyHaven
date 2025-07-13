import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
    colorName: {
        type: String,
        required: true,
    },
    colorCode: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    }
});

export default variantSchema;