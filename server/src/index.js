import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js";

const PORT = process.env.PORT || 4001;
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));

mongoose.connect(process.env.MONGOOSE_URL).then(() => console.log("mongoose connected")).catch((error) => console.log(error));
