import mongoose from 'mongoose';

const categoryScema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

const Category = mongoose.model('Category', categoryScema);
export default Category;