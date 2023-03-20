import Tag from "../models/Tag.js";

/**
 * GET ALL PRODUCT TAGS
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getAllProductTags = async (req, res, next) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      data: data,
      message: "Get All Product Tag",
    });
  } catch (error) {
    next(error);
  }
};
/**
 * CREATE PRODUCT TAGS
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const createProductTag = async (req, res, next) => {
  try {
    const { name, slug } = req.body;

    const data = await Tag.create({ name, slug });
    res.status(200).json({
      data: data,
      message: "Create Product Tag",
    });
  } catch (error) {
    next(error);
  }
};
/**
 * SINGLE PRODUCT TAGS
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getSingleProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findById(id);
    res.status(200).json({
      data: data,
      message: "Create Product Tag",
    });
  } catch (error) {
    next(error);
  }
};
/**
 * DELTE PRODUCT TAGS
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const deleteProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      data: data,
      message: "Create Product Tag",
    });
  } catch (error) {
    next(error);
  }
};
/**
 * UPDATE PRODUCT TAGS
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const updateProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(id, { name, slug }, { new: true });
    res.status(200).json({
      data: data,
      message: "Create Product Tag",
    });
  } catch (error) {
    next(error);
  }
};
