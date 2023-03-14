import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategory from "./routes/productCategory.js";
import mongoDBConnect from "./config/db.js";

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
app.use("/api/v1/product", productCategory);

// server port
const PORT = process.env.PORT || 5056;

app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server running on port ${PORT}`.bgGreen.black);
});
