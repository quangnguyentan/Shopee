const Product = require("../models/Product");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class ProductsController {
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("index", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
  details(req, res, next) {
    Promise.all([Product.find({}).sortable(req)])
      .then(([products]) => {
        res.render("details", {
          products: mutipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
}

module.exports = new ProductsController();
