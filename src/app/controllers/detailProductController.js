const Product = require("../models/Product");
const { mongooseToObject } = require("../../util/mongoose");
class detailProductController {
  detail_products(req, res, next) {
    Product.findOne({ name: req.params.name })
      .then((product) => {
        res.render("products/detail-products", {
          product: mongooseToObject(product),
        });
      })
      .catch(next);
  }
}
module.exports = new detailProductController();
