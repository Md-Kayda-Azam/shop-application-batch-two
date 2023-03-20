import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productControllers.js";

const routes = express.Router();

// routes
routes.get("/product", getAllProducts).post("/product", createProduct);

export default routes;
