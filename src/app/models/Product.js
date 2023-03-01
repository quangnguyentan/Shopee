const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);
const slug = require("mongoose-slug-generator");
// const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;
const Product = new Schema(
  {
    name: { type: String, require: true },
    oldPrice: { type: String, require: true },
    newPrice: { type: String, require: true },
    saled: { type: String, require: true },
    origin: { type: String, require: true },
    saleOff: { type: String, require: true },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);
Product.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidtype = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidtype ? req.query.type : "desc",
    });
  }
  return this;
};
module.exports = mongoose.model("Product", Product);
