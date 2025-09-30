//entry point for api -- express app
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import cors from 'cors';

dotenv.config(); //load env variables from .env file

const app = express();

app.use(cors());

app.use(express.json()); //middleware to parse json body

app.use("/api/products", productRoutes); //mount the product routes

app.listen(3000, () => { //callback function once server is started
    connectDB();
    console.log('Server started at http://localhost:3000');
})

// bCWwIVcdRpgJxsJn

// mongodb+srv://alem:bCWwIVcdRpgJxsJn@cluster0.tjvwwa7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0