import mongoose from "mongoose";

const productSchama = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    regular_price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    stock: {
      type: Number,
      default: null,
    },
    short_desc: {
      type: String,
      trim: true,
    },
    long_desc: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    gallery: {
      type: String,
      default: null,
      trim: true,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
    },
    tags: { type: [mongoose.Schema.Types.ObjectId], ref: "Tag" },
    brands: { type: [mongoose.Schema.Types.ObjectId], ref: "Brand" },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export default
export default mongoose.model("Product", productSchama);
