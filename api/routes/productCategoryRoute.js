import express from "express";
import {
  createProductCategory,
  deleteProductCategory,
  getAllProductCategory,
  singleProductCategory,
  updateProductCategory,
} from "../controllers/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js";

const routes = express.Router();

// routes
routes.get("/category", getAllProductCategory);
routes.post("/category", productCategoryMulter, createProductCategory);
routes.get("/category/:id", singleProductCategory);
routes.delete("/category/:id", deleteProductCategory);
routes.put("/category/:id", updateProductCategory);

export default routes;
