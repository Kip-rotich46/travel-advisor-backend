import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

const app = express();
dotenv.config();

const PORT = 3001;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB')
    } catch (err) {

        throw (err)
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB is Disconnected')
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected')
});

//Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus , 
        message: errorMessage,
        stack: err.stack
    });
});

app.listen(PORT, () => (
    connect(),
    console.log(`app is running on port${PORT}`))
) 