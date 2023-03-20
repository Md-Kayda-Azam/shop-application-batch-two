import Brand from "../models/Brand.js";
import { createError } from "../utils/createError.js";

/**
 * get all brand category
 * @param {*} req
 * @param {*} res
 */
export const getAllProductBrand = async (req, res, next) => {
  try {
    const data = await Brand.find();

    res.status(200).json({
      categories: data,
      message: "All data get successful",
    });
  } catch (error) {
    next(createError("Data can not all brand get", 400));
  }
};
/**
 * create product brand
 * @param {*} req
 * @param {*} res
 */
export const ceateProductBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Brand.create({
      name,
      slug,
      photo: req.file.filename,
    });

    res.status(200).json({
      brand: data,
      message: "Create data successful",
    });
  } catch (error) {
    next(createError("Create data can not brand", 400));
  }
};
/**
 * single product brand
 * @param {*} req
 * @param {*} res
 */
export const singleProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findById(id);

    res.status(200).json({
      brand,
      message: "Single data successful",
    });
  } catch (error) {
    next(createError("Single data not found", 400));
  }
};
/**
 * delete product brand
 * @param {*} req
 * @param {*} res
 */
export const deleteProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findByIdAndDelete(id);

    res.status(200).json({
      brand,
      message: "Brand delete data successful",
    });
  } catch (error) {
    next(createError("Brand delete not found", 400));
  }
};
/**
 * update product brand
 * @param {*} req
 * @param {*} res
 */
export const updatedProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
        photo,
      },
      { new: true }
    );

    res.status(200).json({
      brand,
      message: "Brand delete data successful",
    });
  } catch (error) {
    next(createError("Brand delete not found", 400));
  }
};
