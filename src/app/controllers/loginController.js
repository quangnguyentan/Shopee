const Product = require("../models/Product");
const { mongooseToObject } = require("../../util/mongoose");

class loginController {
  login(req, res, next) {
    res.render("login");
  }
}
module.exports = new loginController();
