import Category from "../models/Category.js";

/**
 * get all product category
 * @param {*} req
 * @param {*} res
 */
export const getAllProductCategory = async (req, res, next) => {
  try {
    const data = await Category.find();

    res.status(200).json({
      categories: data,
      message: "All data get successful",
    });
  } catch (error) {
    next(createError("Data can not all category get", 400));
  }
};

/**
 * create product category
 * @param {*} req
 * @param {*} res
 */
export const createProductCategory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Category.create({
      name,
      slug,
      photo: req.file.filename,
    });

    res.status(200).json({
      category: data,
      message: "Create data successful",
    });
  } catch (error) {
    console.log(error);
    next(createError("Data can not category save", 400));
  }
};

/**
 * single product category
 * @param {*} req
 * @param {*} res
 */
export const singleProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Category.findById(id);

    res.status(200).json({
      category: data,
      message: "Single category successful",
    });
  } catch (error) {
    next(createError("Data can not single category", 400));
  }
};
/**
 * delete product category
 * @param {*} req
 * @param {*} res
 */
export const deleteProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);

    res.status(200).json({
      message: " Category delete successful",
    });
  } catch (error) {
    next(createError("Data can not delete category", 400));
  }
};
/**
 * edit product category
 * @param {*} req
 * @param {*} res
 */
export const updateProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );

    res.status(200).json({
      category: data,
      message: " Category updated successful",
    });
  } catch (error) {
    next(createError("Data can not update category", 400));
  }
};
