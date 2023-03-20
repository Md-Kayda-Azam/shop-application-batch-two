import { slugCreate } from "../helper/slugCreate.js";
import Product from "../models/Product.js";

/**
 * GET ALL PRODUCT
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      data: data,
      message: "Get all product",
    });
  } catch (error) {
    next(error);
  }
};
/**
 * CREATE PRODUCT
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const createProduct = async (req, res, next) => {
  try {
    // regular_price, sale_price, stock, short_desc, long_desc
    const { name } = req.body;

    console.log(slugCreate(name));

    // const data = await Product.create({ name, slug, regular_price });
    // res.status(200).json({
    //   data: data,
    //   message: "Get all product",
    // });
  } catch (error) {
    next(error);
  }
};
