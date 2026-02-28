import express from 'express';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

function isOriginAllowed(origin) {
    const allowedOrigins = new Set(
        [
            process.env.FRONTEND_URL,
            process.env.FRONTEND_PREVIEW_URL,
            'http://localhost:5173',
        ].filter(Boolean)
    );

    if (allowedOrigins.has(origin)) {
        return true;
    }

    const vercelProjectPrefix = process.env.FRONTEND_VERCEL_PROJECT;
    if (
        vercelProjectPrefix &&
        origin.startsWith(`https://${vercelProjectPrefix}`) &&
        origin.endsWith('.vercel.app')
    ) {
        return true;
    }

    return false;
}

app.use(
    cors({
        origin(origin, callback) {
            if (!origin) {
                return callback(null, true);
            }

            if (isOriginAllowed(origin)) {
                return callback(null, true);
            }

            return callback(new Error('Not allowed by CORS'));
        },
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

export default app;
