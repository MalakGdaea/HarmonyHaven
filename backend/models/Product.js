import mongoose from 'mongoose';
import variantSchema from './Variant.js';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    variants: {
        type: [variantSchema],
    }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
