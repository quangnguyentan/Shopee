const Product = require("../models/Product");
const { mutipleMongooseToObject } = require("../../util/mongoose");
var PAZE_SIZE = 10;
class ProductsController {
  index(req, res, next) {
    Product.find({}).then((products) => {
      res.render("index", {
        products: mutipleMongooseToObject(products),
      });
    });
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
  server(req, res, next) {
    var page = req.query.page;
    if (page) {
      page = parseInt(page);
      if (typeof page !== "undefined" && page < 1) {
        page = 1;
      }
      var soLuongBoQua = (page - 1) * PAZE_SIZE;
      Product.find({})
        .skip(soLuongBoQua)
        .limit(PAZE_SIZE)
        .then((data) => {
          Product.countDocuments({}).then((total) => {
            var tongSoPage = Math.ceil(total / PAZE_SIZE);
            res.json({
              total: total,
              tongSoPage: tongSoPage,
              data: data,
            });
          });
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    } else {
      Product.find({})
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    }
  }
}

module.exports = new ProductsController();
