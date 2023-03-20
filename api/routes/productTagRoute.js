import express from "express";
import {
  getAllProductTags,
  createProductTag,
  getSingleProductTag,
  deleteProductTag,
  updateProductTag,
} from "../controllers/productTagControllers.js";

const routes = express.Router();

// routes
routes.get("/tag", getAllProductTags).post("/tag", createProductTag);
routes
  .get("/tag/:id", getSingleProductTag)
  .delete("/tag/:id", deleteProductTag)
  .put("/tag/:id", updateProductTag);

export default routes;
