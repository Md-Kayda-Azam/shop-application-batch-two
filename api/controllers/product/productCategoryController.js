import Category from "../../models/Category.js";

/**
 * get all product category
 * @param {*} req
 * @param {*} res
 */
export const getAllProductCategory = async (req, res) => {
  try {
    const data = await Category.find();

    res.status(200).json({
      categories: data,
      message: "All data get successful",
    });
  } catch (error) {}
};

/**
 * create product category
 * @param {*} req
 * @param {*} res
 */
export const createProductCategory = async (req, res) => {
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
  } catch (error) {}
};

/**
 * single product category
 * @param {*} req
 * @param {*} res
 */
export const singleProductCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Category.findOne({ slug });

    res.status(200).json({
      category: data,
      message: "Single category successful",
    });
  } catch (error) {}
};
/**
 * delete product category
 * @param {*} req
 * @param {*} res
 */
export const deleteProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);

    res.status(200).json({
      message: " Category delete successful",
    });
  } catch (error) {}
};
/**
 * edit product category
 * @param {*} req
 * @param {*} res
 */
export const updateProductCategory = async (req, res) => {
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
  } catch (error) {}
};
