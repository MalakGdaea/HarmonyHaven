import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

// routes
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';


const allowedOrigins = [
    `http://localhost:5173`,
    "https://harmony-haven-hc4tp5kst-malakgdaeas-projects.vercel.app",
    "https://harmony-haven-blush.vercel.app"
];

const app = express();


app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch(err => console.error('MongoDB connection error:', err));









