import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategoryRoute.js";
import productBrandRoute from "./routes/productBrandRoute.js";
import productTagRoute from "./routes/productTagRoute.js";
import productRoute from "./routes/productRoute.js";
import mongoDBConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";

// init express
const app = express();
dotenv.config();

/// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// static
app.use(express.static("/api/public"));

// routes
app.use("/api/v1/product", productRoute);
app.use("/api/v1/product", productCategoryRoute);
app.use("/api/v1/product", productBrandRoute);
app.use("/api/v1/product", productTagRoute);

// server port
const PORT = process.env.PORT || 5056;

// error handler
app.use(errorHandle);

app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server running on port ${PORT}`.bgGreen.black);
});
