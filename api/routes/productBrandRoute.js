import express from "express";
import {
  ceateProductBrand,
  deleteProductBrand,
  getAllProductBrand,
  singleProductBrand,
  updatedProductBrand,
} from "../controllers/productBrandControllers.js";
import { productBrandMulter } from "../utils/multer.js";

const routes = express.Router();
routes.get("/brand", getAllProductBrand);
routes.post("/brand", productBrandMulter, ceateProductBrand);
routes.get("/brand/:id", singleProductBrand);
routes.delete("/brand/:id", deleteProductBrand);
routes.put("/brand/:id", updatedProductBrand);

export default routes;
