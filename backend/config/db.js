import mongoose from 'mongoose';

const globalWithMongoose = globalThis;

if (!globalWithMongoose._mongoose) {
    globalWithMongoose._mongoose = { conn: null, promise: null };
}

const cached = globalWithMongoose._mongoose;

export async function connectToDatabase() {
    const mongodbUri = process.env.MONGODB_URI;

    if (!mongodbUri) {
        throw new Error('MONGODB_URI is not set');
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(mongodbUri).then((mongooseInstance) => mongooseInstance);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
