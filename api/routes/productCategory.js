import express from "express";
import {
  createProductCategory,
  getAllProductCategory,
  singleProductCategory,
  deleteProductCategory,
  updateProductCategory,
} from "../controllers/product/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js";

const routes = express.Router();

// routes
routes.get("/category", getAllProductCategory);
routes.post("/category", productCategoryMulter, createProductCategory);
routes.get("/category/:slug", singleProductCategory);
routes.delete("/category/:id", deleteProductCategory);
routes.put("/category/:id", updateProductCategory);

export default routes;
