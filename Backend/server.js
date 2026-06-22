import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import path from 'path';
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productRoutes);

    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    
    app.get( (req, res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })


console.log("__dirname:", __dirname);
console.log("index:", path.join(__dirname, "frontend", "dist", "index.html"));

app.listen(PORT, () => {
    connectDB();
    console.log("Connected to server from http://localhost:", PORT);
});